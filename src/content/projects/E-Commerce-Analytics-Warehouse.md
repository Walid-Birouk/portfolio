---
title: E-Commerce Analytics Warehouse
stack: Python & PostgreSQL & dbt & Docker & Metabase
pageSlug: e-commerce-analytics-warehouse
thumb: supermarket.png
date: 2025-01-01T00:00:00+00:00
order: 6
description: An ELT warehouse for e-commerce data, with Python ingestion into PostgreSQL, dbt star-schema modelling with tests at every layer, and KPI dashboards in Metabase.
repoUrl: https://github.com/Walid-Birouk/ecom-analytics-mvp
flow: ["Python", "PostgreSQL", "dbt", "Metabase"]
---

### ELT warehouse with dbt, tested at every layer

## Context

Raw e-commerce exports arrive as orders, order lines and products, which is enough to answer "what did we sell" and almost nothing else. Questions like average order value by category, or whether repeat customers spend more, need a grain that has been decided on deliberately and joins that hold. I built the warehouse that sits between the two: raw data in, a tested dimensional model out, and a dashboard on top of it.

## Constraints

- **Grain has to be decided before anything else.** An order has several lines. One row per order and one row per order line give different revenue totals, and joining them without care double-counts.
- **Raw exports only.** Orders, order lines and products answer "what did we sell" and little else. Customer and date attributes have to be modelled.
- **Joins that hold.** A fact row that points to a missing product or customer silently drops out of a dashboard.
- **Tests that fail the build.** The model is only trusted if its checks stop the run when the data is wrong.

## What I built

<div style="overflow-x:auto;margin:1.5rem 0;"><svg viewBox="0 0 880 345" role="img" aria-label="Python ingestion lands raw e-commerce data in a PostgreSQL staging schema, dbt models it into a star schema of two fact tables and three dimensions with tests at every layer, and Metabase reads the marts." style="width:100%;max-width:880px;height:auto;display:block;margin:0 auto;font-family:'JetBrains Mono',monospace;">
<defs><marker id="ecw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"></path></marker></defs>
<rect x="10" y="60" width="195" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="107" y="90" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Ingestion</text>
<text x="107" y="116" text-anchor="middle" fill="#6b7280" font-size="10">Python</text>
<text x="107" y="134" text-anchor="middle" fill="#6b7280" font-size="10">raw orders &amp; products</text>
<rect x="232" y="60" width="195" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="329" y="90" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">PostgreSQL</text>
<text x="329" y="116" text-anchor="middle" fill="#6b7280" font-size="10">staging schema</text>
<text x="329" y="134" text-anchor="middle" fill="#6b7280" font-size="10">landed as-is</text>
<rect x="454" y="60" width="195" height="100" rx="6" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="551" y="90" text-anchor="middle" fill="#2dd4bf" font-size="13" font-weight="700">dbt</text>
<text x="551" y="116" text-anchor="middle" fill="#6b7280" font-size="10">staging → marts</text>
<text x="551" y="134" text-anchor="middle" fill="#6b7280" font-size="10">tests at every layer</text>
<rect x="676" y="60" width="195" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="773" y="90" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Metabase</text>
<text x="773" y="116" text-anchor="middle" fill="#6b7280" font-size="10">revenue · AOV</text>
<text x="773" y="134" text-anchor="middle" fill="#6b7280" font-size="10">category &amp; time trends</text>
<line x1="207" y1="110" x2="230" y2="110" stroke="#6b7280" marker-end="url(#ecw-arrow)"></line>
<line x1="429" y1="110" x2="452" y2="110" stroke="#6b7280" marker-end="url(#ecw-arrow)"></line>
<line x1="651" y1="110" x2="674" y2="110" stroke="#6b7280" marker-end="url(#ecw-arrow)"></line>
<line x1="551" y1="162" x2="551" y2="228" stroke="#6b7280" marker-end="url(#ecw-arrow)"></line>
<text x="20" y="222" fill="#6b7280" font-size="12">dbt models: star schema</text>
<rect x="10" y="232" width="861" height="96" rx="8" fill="none" stroke="#3f3f46"></rect>
<rect x="18" y="250" width="160" height="32" rx="4" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="98" y="271" text-anchor="middle" fill="#2dd4bf" font-size="11">fct_orders</text>
<rect x="190" y="250" width="160" height="32" rx="4" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="270" y="271" text-anchor="middle" fill="#2dd4bf" font-size="11">fct_order_lines</text>
<rect x="362" y="250" width="160" height="32" rx="4" fill="#141414" stroke="#262626"></rect>
<text x="442" y="271" text-anchor="middle" fill="#e5e5e5" font-size="11">dim_customers</text>
<rect x="534" y="250" width="160" height="32" rx="4" fill="#141414" stroke="#262626"></rect>
<text x="614" y="271" text-anchor="middle" fill="#e5e5e5" font-size="11">dim_products</text>
<rect x="706" y="250" width="160" height="32" rx="4" fill="#141414" stroke="#262626"></rect>
<text x="786" y="271" text-anchor="middle" fill="#e5e5e5" font-size="11">dim_dates</text>
<text x="440" y="312" text-anchor="middle" fill="#6b7280" font-size="10">tests: unique · not_null · relationships</text>
</svg></div>

Python loads the raw order and product data into a PostgreSQL staging schema without transforming it. dbt does the rest: staging models clean and type the raw tables, and mart models build a star schema of two fact tables, `fct_orders` and `fct_order_lines`, against `dim_customers`, `dim_products` and `dim_dates`. Metabase reads only the marts and exposes revenue, average order value, revenue by category and period, order volume trends and customer frequency.

Tests run at every layer rather than only at the end: uniqueness on primary keys, not-null on required fields, and relationship tests that fail the build if a fact row points at a dimension key that does not exist. A referential integrity test is the cheapest way to find out that an export was incomplete, and it finds out before the dashboard quietly under-reports.

## Design choices

**Two fact tables.** Order-level measures such as order value and order count live in `fct_orders`, and product-level measures live in `fct_order_lines`. A single line-grain fact would repeat order attributes on every line, and summing order-level values would then count them once per line.

**ELT.** Python lands the raw data in a staging schema as it arrives, and dbt does the cleaning and modelling in SQL. A change to a transform is then a model change and a re-run, not a re-ingestion, and the logic is versioned and tested alongside the rest of the models.

**Metabase reads only the marts.** The dashboard cannot depend on raw or staging tables, so what it shows is what the tests covered.

## Next steps

- **Incremental models** for the largest fact table, so a run does not rebuild everything.
- **History for dimensions**, such as a changing product category, using snapshots instead of overwriting.

## Stack

dbt, PostgreSQL, Python, Metabase, Docker Compose
