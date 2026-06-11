---
title: Real-Time Big Data Pipeline
stack: Kafka & Spark Structured Streaming & MinIO & Docker
pageSlug: real-time-big-data-pipeline
date: 2024-12-01T00:00:00+00:00
thumb: sa.png
---

## Real-Time Financial Transactions Pipeline

#### Github: [Repository](https://github.com/Walid-Birouk/real-time-big-data-pipeline)

## Overview

A fully containerized real-time data pipeline simulating financial transactions. Events are streamed through Kafka, processed continuously with Spark Structured Streaming, and persisted as partitioned Parquet files on a MinIO object store.

## Architecture

The pipeline follows a standard streaming architecture:

1. **Producer (Kafka)** — Simulates financial transaction events published to a Kafka topic at configurable throughput.
2. **Processing (Spark Structured Streaming)** — Continuously consumes and transforms events from Kafka, applying schema validation and enrichment in micro-batches.
3. **Storage (MinIO)** — Persists processed data as partitioned Parquet files on a local S3-compatible object store, ready for downstream analytics.

## Key Technologies

- **Apache Kafka** — Distributed event streaming for high-throughput message ingestion.
- **Spark Structured Streaming** — Real-time stateful stream processing with exactly-once semantics.
- **MinIO** — S3-compatible object storage for durable, partitioned output.
- **Docker Compose** — Full local stack orchestration with a single command.

## Highlights

- End-to-end streaming pipeline from event generation to durable storage.
- Partitioned Parquet output optimized for efficient downstream querying.
- Fully reproducible: `docker-compose up` spins up the entire stack.
