---
title: RAG Agent in HubSpot
stack: Vertex AI & BigQuery & HubSpot
pageSlug: hubspot-rag-agent
date: 2024-09-15T00:00:00+00:00
thumb: rag.svg
---

## Retrieval-Augmented Generation over Internal Data

**Role:** Generative AI Engineer · **Company:** Algorhythm (internal project) · **Period:** September – December 2024

## Overview

Algorhythm's teams spent time answering the same internal questions and writing the same kinds of internal texts. I built a RAG agent that answers from the company's own BigQuery data, and placed it where people already work: inside HubSpot.

## What I Built

- **RAG agent on Vertex AI** — retrieves internal BigQuery data and generates accurate, context-aware answers.
- **HubSpot integration** — the agent is available inside the CRM for about 50 employees, so they can get answers from company data without leaving HubSpot.
- **Vertex AI workflows** — automate recurring internal writing tasks in a consistent, specialised tone.

## Key Technologies

- **Vertex AI** — LLM workflows and the RAG agent
- **BigQuery** — internal data source for retrieval
- **HubSpot** — where the agent is used
