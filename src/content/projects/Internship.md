---
title: Data Observability (Internship, Algorhythm)
stack: OpenMetadata & Docker & Airflow & Airbyte & dbt & Spark
pageSlug: data-observability-internship
thumb: do.png
date: 2024-06-05T00:00:00+00:00
order: 7
description: A comparative study of data observability tools for Algorhythm, plus a Dockerised modern data stack sandbox and an OpenMetadata proof of concept.
repoLabel: Built at Algorhythm, code not public
flow: ["Airbyte", "Postgres · S3", "dbt · Spark", "OpenMetadata"]

images:
  - do.png
  - do12.png
  - do1.png
  - do2.png
  - do3.png
  - do4.png
  - do5.png
  - do6.png
  - do7.png
  - do8.png
  - do9.png
  - do10.png
---

### Six months at Algorhythm, Turnhout, Belgium

## Context

Algorhythm is a data consultancy that runs managed services on client data platforms across Azure, AWS, Google, Oracle and Snowflake. When a pipeline in one of those environments starts producing wrong data rather than failing outright, nothing alerts: the job succeeds, the dashboard updates, and the error surfaces when a client notices it. The brief was to work out which data observability tool the practice should standardise on, and to prove it worked on something more realistic than a vendor demo.

## Constraints

- **Wrong data does not raise an error.** The job succeeds and the dashboard updates, so the tool has to detect bad data, not failed jobs.
- **A mixed client estate.** Algorhythm runs platforms on Azure, AWS, Google, Oracle and Snowflake, so a tool is only useful if it covers more than one of them.
- **Pricing that is not published.** Some vendors only give prices on request, so cost had to be collected through direct contact.
- **No vendor demo as evidence.** The tools had to be tested on a stack with real lineage and real failure modes, which meant building that stack first.
- **Criteria agreed before scoring.** The scoring rubric had to be validated with stakeholders before any tool was scored.

## What I built

<div style="overflow-x:auto;margin:1.5rem 0;"><svg viewBox="0 0 880 375" role="img" aria-label="A Dockerised modern data stack: Airflow orchestrating Airbyte ingestion into a Postgres warehouse and S3 with Hive Metastore, transformed by dbt and Spark, with OpenMetadata collecting metadata, lineage and data quality test results from each component." style="width:100%;max-width:880px;height:auto;display:block;margin:0 auto;font-family:'JetBrains Mono',monospace;">
<defs><marker id="dob-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"></path></marker></defs>
<text x="10" y="20" fill="#6b7280" font-size="12">Dockerised sandbox environment</text>
<rect x="10" y="30" width="860" height="44" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="440" y="58" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Apache Airflow: orchestration</text>
<rect x="10" y="110" width="200" height="110" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="110" y="140" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Sources</text>
<text x="110" y="168" text-anchor="middle" fill="#6b7280" font-size="10">operational databases</text>
<text x="110" y="186" text-anchor="middle" fill="#6b7280" font-size="10">flat files</text>
<rect x="230" y="110" width="200" height="110" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="330" y="140" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Airbyte</text>
<text x="330" y="168" text-anchor="middle" fill="#6b7280" font-size="10">connector-based</text>
<text x="330" y="186" text-anchor="middle" fill="#6b7280" font-size="10">extract and load</text>
<rect x="450" y="110" width="200" height="110" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="550" y="140" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Storage</text>
<text x="550" y="168" text-anchor="middle" fill="#6b7280" font-size="10">Postgres warehouse</text>
<text x="550" y="186" text-anchor="middle" fill="#6b7280" font-size="10">S3 + Hive Metastore</text>
<rect x="670" y="110" width="200" height="110" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="770" y="140" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Transform</text>
<text x="770" y="168" text-anchor="middle" fill="#6b7280" font-size="10">dbt · Spark</text>
<text x="770" y="186" text-anchor="middle" fill="#6b7280" font-size="10">medallion layers</text>
<line x1="212" y1="165" x2="228" y2="165" stroke="#6b7280" marker-end="url(#dob-arrow)"></line>
<line x1="432" y1="165" x2="448" y2="165" stroke="#6b7280" marker-end="url(#dob-arrow)"></line>
<line x1="652" y1="165" x2="668" y2="165" stroke="#6b7280" marker-end="url(#dob-arrow)"></line>
<line x1="330" y1="76" x2="330" y2="106" stroke="#6b7280" stroke-dasharray="3 3" marker-end="url(#dob-arrow)"></line>
<line x1="550" y1="76" x2="550" y2="106" stroke="#6b7280" stroke-dasharray="3 3" marker-end="url(#dob-arrow)"></line>
<line x1="770" y1="76" x2="770" y2="106" stroke="#6b7280" stroke-dasharray="3 3" marker-end="url(#dob-arrow)"></line>
<text x="10" y="252" fill="#6b7280" font-size="9.5">metadata, lineage and test results</text>
<line x1="330" y1="222" x2="330" y2="278" stroke="#6b7280" stroke-dasharray="3 3" marker-end="url(#dob-arrow)"></line>
<line x1="550" y1="222" x2="550" y2="278" stroke="#6b7280" stroke-dasharray="3 3" marker-end="url(#dob-arrow)"></line>
<line x1="770" y1="222" x2="770" y2="278" stroke="#6b7280" stroke-dasharray="3 3" marker-end="url(#dob-arrow)"></line>
<rect x="10" y="282" width="860" height="76" rx="6" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="440" y="312" text-anchor="middle" fill="#2dd4bf" font-size="13" font-weight="700">OpenMetadata: proof of concept</text>
<text x="440" y="336" text-anchor="middle" fill="#6b7280" font-size="10.5">catalogue · lineage · data quality tests · alerting</text>
</svg></div>

The evaluation needed something to evaluate against, so the first deliverable was a sandbox: a Dockerised modern data stack with Airbyte extracting and loading, Postgres and S3 behind a Hive Metastore holding the data, dbt and Spark transforming it across medallion layers, and Airflow orchestrating the whole thing. That gave the tools a stack with real lineage and real failure modes to attach to.

On top of it I ran a proof of concept with **OpenMetadata**, connecting it to each component, cataloguing the assets, checking that lineage resolved across tool boundaries, running data quality tests and exercising the alerting path.

The written work ran alongside: requirements gathered from stakeholders, a literature review and feature comparison to shortlist candidates, an explicit set of evaluation criteria validated with stakeholders before scoring anything, and vendor engagement to get pricing that is not published. The recommendation was presented to stakeholders at the end.

### Supporting documents

- [Project Plan](https://drive.google.com/file/d/1Sm-1tG6I-9q3UhUR_5kxTPN7cSt7tuJP/view?usp=sharing)
- [Project Report](https://drive.google.com/file/d/13a8jBkkvm1SZ1fJw0ueNMNYFg2BVwkwZ/view?usp=sharing)
- [Reflection](https://drive.google.com/file/d/11YxP0i96oIMDxbtGVBC4FoyWkfrtvDpm/view?usp=sharing)

## Design choices

**A sandbox instead of a vendor demo.** A Dockerised stack with Airbyte, Postgres, S3, a Hive Metastore, dbt, Spark and Airflow gave the tools real lineage across tool boundaries and real tests to run. A demo environment shows how a product behaves on data prepared for it.

**Criteria fixed before scoring.** The criteria were agreed with stakeholders first and the tools scored against them afterwards. Choosing criteria after seeing the tools lets the preferred tool shape the rubric.

**A proof of concept as well as a written comparison.** The literature review and feature comparison produced a shortlist. OpenMetadata was then connected to each component to check that cataloguing, cross-tool lineage, data quality tests and alerting worked on the sandbox. A feature table does not show that lineage resolves across tools.

## Deliverables

The sandbox, the OpenMetadata proof of concept, a project plan, a project report and a reflection, linked above. The recommendation was presented to stakeholders. The report lists the forward steps: Kubernetes deployment, connectors for Redshift, BigQuery and Snowflake, tighter access controls and staff training.

## Stack

OpenMetadata, Airflow, Airbyte, dbt, Spark, PostgreSQL, S3, Hive Metastore, Docker Compose
