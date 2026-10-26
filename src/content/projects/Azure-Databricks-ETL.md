---
title: Azure Databricks, ADLS Gen2 Pipeline
stack: PySpark & Spark SQL & Delta Lake & ADLS Gen2
pageSlug: azure-databricks-etl
thumb: ad0.png
date: 2024-02-02T00:00:00+00:00
order: 4
description: A three-layer Bronze/Silver/Gold ETL pipeline on Azure Databricks and ADLS Gen2, modelling Airbnb listing and calendar data into a Delta Lake star schema.
repoUrl: https://github.com/Walid-Birouk/Azure-Databricks-ETL-
flow: ["Sources", "Bronze", "Silver", "Gold"]

images:
  - ad0.png
---

### Bronze / Silver / Gold ETL on Azure Databricks

## Context

Airbnb publishes its city data as three loosely related exports: a listings file, a calendar of nightly prices and availability, and neighbourhood geometry as GeoJSON. None of them answers a pricing or occupancy question on its own, and the calendar file is large enough that joining it ad hoc stops being practical. I built a pipeline that lands all three in one place and models them into a schema that can be queried directly.

## Constraints

- **Three sources with different shapes.** Listings and calendar are tabular, neighbourhoods are GeoJSON, and none answers a pricing or occupancy question alone.
- **A calendar file too large to join ad hoc.** The model has to be built once and queried, not re-derived per question.
- **A raw zone that stays faithful.** What arrived has to remain recoverable after the cleaning logic changes.
- **Re-runs have to be safe.** A notebook that fails halfway must not leave a half-written table for the next layer to read.

## What I built

<div style="overflow-x:auto;margin:1.5rem 0;"><svg viewBox="0 0 880 270" role="img" aria-label="Bronze, Silver and Gold layers running on Azure Databricks over ADLS Gen2, from Airbnb source files through to analysis." style="width:100%;max-width:880px;height:auto;display:block;margin:0 auto;font-family:'JetBrains Mono',monospace;">
<defs><marker id="adb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"></path></marker></defs>
<text x="443" y="58" text-anchor="middle" fill="#6b7280" font-size="12">Azure Databricks: PySpark, Spark SQL</text>
<rect x="178" y="70" width="530" height="150" rx="8" fill="none" stroke="#2dd4bf" stroke-opacity="0.35" stroke-dasharray="4 4"></rect>
<rect x="8" y="96" width="140" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="78" y="122" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Sources</text>
<text x="78" y="148" text-anchor="middle" fill="#6b7280" font-size="10">listings.csv</text>
<text x="78" y="166" text-anchor="middle" fill="#6b7280" font-size="10">calendar.csv</text>
<text x="78" y="184" text-anchor="middle" fill="#6b7280" font-size="10">neighbourhoods</text>
<rect x="188" y="96" width="140" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="258" y="122" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Bronze</text>
<text x="258" y="148" text-anchor="middle" fill="#6b7280" font-size="10">raw, as landed</text>
<text x="258" y="166" text-anchor="middle" fill="#6b7280" font-size="10">no transforms</text>
<text x="258" y="184" text-anchor="middle" fill="#6b7280" font-size="10">Parquet</text>
<rect x="368" y="96" width="140" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="438" y="122" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Silver</text>
<text x="438" y="148" text-anchor="middle" fill="#6b7280" font-size="10">deduplicate</text>
<text x="438" y="166" text-anchor="middle" fill="#6b7280" font-size="10">normalise · enrich</text>
<text x="438" y="184" text-anchor="middle" fill="#6b7280" font-size="10">Delta</text>
<rect x="548" y="96" width="140" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="618" y="122" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Gold</text>
<text x="618" y="148" text-anchor="middle" fill="#6b7280" font-size="10">star schema</text>
<text x="618" y="166" text-anchor="middle" fill="#6b7280" font-size="10">aggregates</text>
<text x="618" y="184" text-anchor="middle" fill="#6b7280" font-size="10">Delta</text>
<rect x="728" y="96" width="140" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="798" y="122" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Analysis</text>
<text x="798" y="148" text-anchor="middle" fill="#6b7280" font-size="10">Spark SQL</text>
<text x="798" y="166" text-anchor="middle" fill="#6b7280" font-size="10">notebooks</text>
<line x1="150" y1="146" x2="186" y2="146" stroke="#6b7280" marker-end="url(#adb-arrow)"></line>
<line x1="330" y1="146" x2="366" y2="146" stroke="#6b7280" marker-end="url(#adb-arrow)"></line>
<line x1="510" y1="146" x2="546" y2="146" stroke="#6b7280" marker-end="url(#adb-arrow)"></line>
<line x1="690" y1="146" x2="726" y2="146" stroke="#6b7280" marker-end="url(#adb-arrow)"></line>
<text x="443" y="246" text-anchor="middle" fill="#6b7280" font-size="11">all three layers persisted to ADLS Gen2, Delta Lake for ACID writes</text>
</svg></div>

Three notebooks, one per layer. **Bronze** ingests the listings, calendar and GeoJSON files and writes them to ADLS Gen2 as Parquet with no transformation, so the raw zone stays a faithful copy of what arrived. **Silver** deduplicates, normalises types and enriches records, producing tables that are structurally sound enough to query. **Gold** models the cleaned data into a star schema and materialises the aggregates that the analysis actually reads.

Delta Lake sits under Silver and Gold, which is what makes a re-run safe: writes are atomic, so a notebook that fails halfway does not leave a half-written table for the next layer to read.

## Design choices

**Three layers.** Bronze is stored exactly as it arrived, Silver holds the cleaned records and Gold holds the model the analysis reads. Cleaning on ingest would be shorter, but a mistake in a transform could then only be fixed by fetching the files again. With Bronze untouched, Silver and Gold can be rebuilt from it.

**Delta Lake under Silver and Gold.** Delta writes are atomic, so a failed notebook leaves the previous table version in place instead of a partial one. Bronze stays plain Parquet because it is written once and never updated.

**A star schema in Gold.** Listings, calendar days and neighbourhoods have different grains. Flattening them into one table repeats listing and neighbourhood attributes on every calendar row. A fact table with small dimensions keeps each attribute in one place and keeps the aggregates cheap to read.

## Next steps

- **Tests between layers.** Uniqueness on listing IDs and not-null checks on prices at the Silver boundary, so bad data stops there instead of reaching Gold.
- **Orchestration.** The three notebooks run as a sequence. A scheduled job with failure alerts would remove the manual step.
- **File compaction.** An `OPTIMIZE` step on the Delta tables, so the number of small files does not grow with each run.

## Stack

PySpark, Spark SQL, Delta Lake, Azure Databricks, Azure Data Lake Storage Gen2, Parquet
