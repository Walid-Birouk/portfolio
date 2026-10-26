---
title: RAG Agent in HubSpot
stack: Vertex AI & BigQuery & HubSpot
pageSlug: rag-agent-hubspot
thumb: rag.svg
date: 2024-09-15T00:00:00+00:00
order: 2
description: A retrieval-augmented generation agent that answers from internal BigQuery data, built on Vertex AI and integrated into HubSpot at Algorhythm.
repoLabel: Built at Algorhythm, code not public
flow: ["HubSpot", "RAG agent", "Vertex AI", "BigQuery"]
---

### Generative AI agent over internal data, inside the CRM

## Context

I built this at Algorhythm, a data consultancy, in autumn 2024 as a generative AI engineer. Internal communication included repetitive queries whose answers sat in internal data in BigQuery.

## Constraints

- **The answers live in internal data.** The agent had to answer from the company's own BigQuery data, not from what a model happens to know.
- **It had to be where the team already works.** The queries came up in HubSpot, so that is where the agent had to be.
- **A consistent, specialised tone.** Replies needed to read the same way every time.

## What I built

<div style="overflow-x:auto;margin:1.5rem 0;"><svg viewBox="0 0 880 230" role="img" aria-label="A HubSpot user asks a question; the RAG agent retrieves internal data from BigQuery, uses Vertex AI workflows, and answers back in HubSpot." style="width:100%;max-width:880px;height:auto;display:block;margin:0 auto;">
<defs><marker id="rag-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"></path></marker></defs>
<rect x="20" y="50" width="210" height="90" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="125" y="76" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">HubSpot</text>
<text x="125" y="100" text-anchor="middle" fill="#6b7280" font-size="10">where the team works</text>
<text x="125" y="118" text-anchor="middle" fill="#6b7280" font-size="10">repetitive internal queries</text>
<rect x="335" y="50" width="210" height="90" rx="6" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="440" y="76" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">RAG agent</text>
<text x="440" y="100" text-anchor="middle" fill="#6b7280" font-size="10">retrieves, then answers</text>
<rect x="650" y="50" width="210" height="90" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="755" y="76" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">BigQuery</text>
<text x="755" y="100" text-anchor="middle" fill="#6b7280" font-size="10">internal data</text>
<rect x="335" y="165" width="210" height="50" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="440" y="195" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Vertex AI</text>
<line x1="230" y1="85" x2="335" y2="85" stroke="#6b7280" marker-end="url(#rag-arrow)"></line>
<text x="282" y="77" text-anchor="middle" fill="#6b7280" font-size="10">question</text>
<line x1="335" y1="115" x2="230" y2="115" stroke="#6b7280" marker-end="url(#rag-arrow)"></line>
<text x="282" y="132" text-anchor="middle" fill="#6b7280" font-size="10">answer</text>
<line x1="545" y1="95" x2="650" y2="95" stroke="#6b7280" marker-end="url(#rag-arrow)"></line>
<text x="597" y="87" text-anchor="middle" fill="#6b7280" font-size="10">retrieve</text>
<line x1="440" y1="140" x2="440" y2="165" stroke="#6b7280" marker-end="url(#rag-arrow)"></line>
<text x="490" y="156" text-anchor="middle" fill="#6b7280" font-size="10">AI workflows</text>
</svg></div>

- **AI workflows on Vertex AI and BigQuery** that automate internal tasks and keep a consistent, specialised tone.
- **A RAG agent** that retrieves internal BigQuery data to give accurate, context-aware answers instead of answering from the model alone.
- **A HubSpot integration** that puts the agent where the team already works, to support internal communication and automate repetitive queries.

## Design choices

**Retrieval from BigQuery, not the model alone.** The answers sit in internal data, so the agent retrieves that data first and answers from what it finds. That is what makes the answers accurate and specific to the company.

**The agent lives inside HubSpot.** The team already works there, so the agent meets the queries where they come in and nobody has to switch tools to use it.

## Stack

Vertex AI, BigQuery, HubSpot
