---
title: E-Commerce Analytics Warehouse
stack: Python & PostgreSQL & dbt & Docker & Metabase
pageSlug: e-commerce-analytics-warehouse
date: 2025-01-01T00:00:00+00:00
thumb: supermarket.png
---

## End-to-End Analytics Pipeline

#### Github: [Repository](https://github.com/Walid-Birouk/e-commerce-analytics-warehouse)

## Overview

An end-to-end analytics pipeline for an e-commerce dataset — from raw ingestion through structured transformation to KPI dashboards. Built around the ELT pattern with dbt as the transformation layer.

## Pipeline Architecture

1. **Ingestion (Python)** — Raw order and product data loaded into a PostgreSQL staging schema.
2. **Transformation (dbt)** — Data modeled into a star schema with 10+ tables. Data quality tests enforced at every layer.
3. **Visualization (Metabase)** — Interactive dashboard exposing key business KPIs.

## Data Model

A star schema with:
- `fct_orders` and `fct_order_lines` — core transactional facts
- `dim_customers`, `dim_products`, `dim_dates` — supporting dimensions

## Data Quality

dbt tests applied across all models:
- **Uniqueness** — primary keys are unique
- **Not null** — required fields are always populated
- **Referential integrity** — foreign keys validated against dimension tables

## Dashboard KPIs

- Total revenue and Average Order Value (AOV)
- Revenue by product category and time period
- Order volume trends and customer frequency

## Key Technologies

- **dbt** — transformation, testing, and lineage documentation
- **PostgreSQL** — analytical warehouse
- **Metabase** — self-serve BI and dashboarding
- **Docker Compose** — fully reproducible local environment
