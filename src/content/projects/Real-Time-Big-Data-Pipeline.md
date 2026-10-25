---
title: Real-Time Big Data Pipeline
stack: Kafka & Spark Structured Streaming & MinIO & Docker
pageSlug: real-time-big-data-pipeline
date: 2024-12-01T00:00:00+00:00
order: 5
description: A containerised streaming pipeline that moves simulated financial transactions through Kafka and Spark Structured Streaming into partitioned Parquet on MinIO.
repoUrl: https://github.com/Walid-Birouk/kafka-spark-minio-pipeline
flow: ["Producer", "Kafka", "Spark", "MinIO"]
---

### Streaming financial transactions end to end

## Context

Batch pipelines let you re-read the input as many times as you like. Streaming ones do not, and most of what makes streaming difficult (ordering, delivery guarantees, what a "batch" even means when the data never stops) only shows up once something is actually running. I built a full streaming stack that runs locally so those problems are reproducible rather than theoretical: a producer generating financial transaction events, Kafka carrying them, Spark Structured Streaming processing them, and object storage holding the result.

## Constraints

- **The input cannot be re-read.** A batch job can be re-run on the same files. A stream has to be processed correctly as it arrives, or the state has to be recoverable from checkpoints.
- **Ordering and delivery.** Events can arrive late or be delivered more than once, and the output has to tolerate both.
- **A batch that never closes.** Output is written in micro-batches, and the batch size and trigger interval decide how many files the output produces.
- **The whole stack on one machine.** Kafka, Spark and MinIO run together under Docker Compose, so memory and startup order are part of the design.
- **Simulated input.** The producer generates the transactions, so the pipeline has to be correct without a real source to compare against.

## What I built

<div style="overflow-x:auto;margin:1.5rem 0;"><svg viewBox="0 0 880 240" role="img" aria-label="A producer publishes transaction events to a Kafka topic, Spark Structured Streaming consumes and transforms them, and partitioned Parquet is written to MinIO, all running under Docker Compose." style="width:100%;max-width:880px;height:auto;display:block;margin:0 auto;font-family:'JetBrains Mono',monospace;">
<defs><marker id="rtp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"></path></marker></defs>
<text x="440" y="30" text-anchor="middle" fill="#6b7280" font-size="12">Docker Compose: the whole stack from one command</text>
<rect x="8" y="42" width="860" height="180" rx="8" fill="none" stroke="#2dd4bf" stroke-opacity="0.35" stroke-dasharray="4 4"></rect>
<rect x="22" y="72" width="180" height="118" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="112" y="104" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Producer</text>
<text x="112" y="134" text-anchor="middle" fill="#6b7280" font-size="10">simulated financial</text>
<text x="112" y="152" text-anchor="middle" fill="#6b7280" font-size="10">transaction events</text>
<text x="112" y="170" text-anchor="middle" fill="#6b7280" font-size="10">configurable rate</text>
<rect x="242" y="72" width="180" height="118" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="332" y="104" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Kafka</text>
<text x="332" y="134" text-anchor="middle" fill="#6b7280" font-size="10">transactions topic</text>
<text x="332" y="152" text-anchor="middle" fill="#6b7280" font-size="10">durable log</text>
<text x="332" y="170" text-anchor="middle" fill="#6b7280" font-size="10">replayable offsets</text>
<rect x="462" y="72" width="180" height="118" rx="6" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="552" y="104" text-anchor="middle" fill="#2dd4bf" font-size="13" font-weight="700">Spark</text>
<text x="552" y="134" text-anchor="middle" fill="#e5e5e5" font-size="10.5">Structured Streaming</text>
<text x="552" y="152" text-anchor="middle" fill="#6b7280" font-size="10">schema validation</text>
<text x="552" y="170" text-anchor="middle" fill="#6b7280" font-size="10">enrich · micro-batches</text>
<rect x="682" y="72" width="180" height="118" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="772" y="104" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">MinIO</text>
<text x="772" y="134" text-anchor="middle" fill="#6b7280" font-size="10">S3-compatible store</text>
<text x="772" y="152" text-anchor="middle" fill="#6b7280" font-size="10">partitioned Parquet</text>
<text x="772" y="170" text-anchor="middle" fill="#6b7280" font-size="10">ready to query</text>
<line x1="204" y1="131" x2="240" y2="131" stroke="#6b7280" marker-end="url(#rtp-arrow)"></line>
<line x1="424" y1="131" x2="460" y2="131" stroke="#6b7280" marker-end="url(#rtp-arrow)"></line>
<line x1="644" y1="131" x2="680" y2="131" stroke="#6b7280" marker-end="url(#rtp-arrow)"></line>
</svg></div>

A producer publishes simulated transaction events to a Kafka topic at a configurable rate. Spark Structured Streaming consumes that topic continuously, validates each event against a declared schema, enriches it, and writes the result to MinIO as partitioned Parquet, laid out so downstream readers can prune whole partitions instead of scanning everything.

The whole stack (Kafka, Spark, MinIO) is defined in Docker Compose, so `docker-compose up` reproduces it from nothing. That matters more than it sounds: a streaming bug that only appears under load is worth very little if you cannot get back to the same starting state.

## Design choices

**A declared schema.** Spark validates each event against a schema defined in the code. Inference on a stream takes the shape from whatever arrives first, so a malformed event could change the schema of the output. With a declared schema that event fails validation instead.

**Partitioned output.** The Parquet output is laid out so downstream readers skip whole partitions. A flat directory is simpler to write, but every query then scans everything, and that cost grows with the length of the run.

**Object storage as the sink.** MinIO is S3-compatible, so the same layout and paths work on cloud object storage. Local disk would work for the demo and need rewriting afterwards.

## Next steps

- **Throughput.** Find the event rate at which consumer lag starts to grow, which shows where the pipeline stops keeping up.
- **End-to-end latency.** Time from publish to a readable Parquet file.
- **Late events.** Watermarking on event time, with a test that sends late events and checks what the output does with them.
- **File compaction.** A short trigger interval produces many small files, so readers would need a compaction job.

## Stack

Apache Kafka, Spark Structured Streaming, MinIO, Parquet, Docker Compose, Python
