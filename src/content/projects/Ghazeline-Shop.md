---
title: Ghazeline Shop
stack: PostgreSQL & Supabase & n8n
pageSlug: ghazeline-shop
date: 2026-01-01T00:00:00+00:00
order: 1
description: Data and AI work on a live online store with 30+ products. The PostgreSQL / Supabase data model, order summary automation, an n8n agent that answers 50–100 Instagram messages a day and the backend features in between.
liveUrl: https://ghazeline.com
repoLabel: Private repository, client work
flow: ["Orders", "Supabase", "Order sheets"]
---

### Data and AI work on a live online store

## Context

Selling online in Algeria doesn't work the way it does in Europe. Card payments are rare, so effectively everything is cash on delivery. Shipping runs through private carriers with per-wilaya tariffs. And most sellers operate their entire business out of an Instagram DM inbox.

Ghazeline is a ready-to-wear brand. Its store went live in January 2026 and I have worked on it since as the data and AI engineer. The shop has 30+ products and gets 50–100 Instagram messages a day. It is a small team, so the role also covered the backend work the data depended on.

## What I did

- Designed the PostgreSQL / Supabase data model: products, variants, categories, stock and orders.
- Built backend features that collect data into that model.
- Automated the creation of order summary sheets and cash-on-delivery confirmation.
- Deployed an AI agent on n8n that answers the 50–100 customer messages the store gets on Instagram each day, so the team only steps in for complex requests.
- Maintain the store: fixes and new features from business feedback, and monitoring of the data flows.

## Constraints

- **Cash on delivery is the default, not an edge case.** There is no payment gateway to lean on for order confirmation or fraud signal.
- **58 wilayas**, each with its own home-delivery and stop-desk tariff.
- **The operator is not technical** and runs the shop from a phone.

## How the store fits together

The store runs on Next.js on Vercel, with Supabase for Postgres, auth and storage. Orders go to Yalidine to create parcels and sync shipping status, and a Telegram bot alerts the operator to new orders. My work sits in the Supabase data model and the automations around it.

<div style="overflow-x:auto;margin:1.5rem 0;"><svg viewBox="0 0 880 500" role="img" aria-label="Ghazeline Shop architecture: browser storefront and localStorage cart, Vercel-hosted Next.js split into public routes using the anonymous Supabase client behind RLS and admin API routes using the service-role client server-side only, both writing to Supabase Postgres, Auth and Storage, with Meta Pixel, the Yalidine API and a Telegram bot as external services." style="width:100%;max-width:880px;height:auto;display:block;margin:0 auto;font-family:'JetBrains Mono',monospace;">
<defs><marker id="ghz-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"></path></marker></defs>
<text x="20" y="20" fill="#6b7280" font-size="12">Browser</text>
<rect x="20" y="28" width="540" height="84" rx="8" fill="none" stroke="#3f3f46" stroke-dasharray="4 4"></rect>
<rect x="36" y="44" width="244" height="52" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="158" y="66" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Storefront UI</text>
<text x="158" y="84" text-anchor="middle" fill="#6b7280" font-size="10.5">catalogue · variants · reviews</text>
<rect x="300" y="44" width="244" height="52" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="422" y="66" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Cart in localStorage</text>
<text x="422" y="84" text-anchor="middle" fill="#6b7280" font-size="10.5">React Context · no DB round-trip</text>
<text x="20" y="140" fill="#6b7280" font-size="12">Vercel: Next.js 15</text>
<rect x="20" y="148" width="540" height="152" rx="8" fill="none" stroke="#2dd4bf" stroke-opacity="0.35" stroke-dasharray="4 4"></rect>
<line x1="290" y1="162" x2="290" y2="286" stroke="#3f3f46" stroke-dasharray="3 3"></line>
<rect x="36" y="164" width="242" height="120" rx="6" fill="#141414" stroke="#2dd4bf" stroke-opacity="0.7"></rect>
<text x="157" y="188" text-anchor="middle" fill="#2dd4bf" font-size="13" font-weight="700">Public routes</text>
<text x="157" y="210" text-anchor="middle" fill="#e5e5e5" font-size="11">anon Supabase client</text>
<text x="157" y="228" text-anchor="middle" fill="#6b7280" font-size="10.5">RLS enforced</text>
<text x="157" y="252" text-anchor="middle" fill="#6b7280" font-size="10.5">shared pricing engine,</text>
<text x="157" y="268" text-anchor="middle" fill="#6b7280" font-size="10.5">server recalculates every total</text>
<rect x="302" y="164" width="242" height="120" rx="6" fill="#141414" stroke="#e5e5e5" stroke-opacity="0.55" stroke-width="1.5"></rect>
<text x="423" y="188" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Admin API routes</text>
<text x="423" y="210" text-anchor="middle" fill="#e5e5e5" font-size="11">service-role client</text>
<text x="423" y="228" text-anchor="middle" fill="#6b7280" font-size="10.5">server-side only</text>
<text x="423" y="252" text-anchor="middle" fill="#6b7280" font-size="10.5">never shipped to the browser</text>
<text x="423" y="268" text-anchor="middle" fill="#6b7280" font-size="10.5">full access, bypasses RLS</text>
<text x="20" y="340" fill="#6b7280" font-size="12">Supabase</text>
<rect x="20" y="348" width="540" height="132" rx="8" fill="none" stroke="#3f3f46"></rect>
<rect x="36" y="364" width="164" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="118" y="390" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Postgres</text>
<text x="118" y="412" text-anchor="middle" fill="#6b7280" font-size="10">orders · products</text>
<text x="118" y="428" text-anchor="middle" fill="#6b7280" font-size="10">tariffs · promo codes</text>
<text x="118" y="444" text-anchor="middle" fill="#6b7280" font-size="10">RLS · triggers · procs</text>
<rect x="214" y="364" width="164" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="296" y="390" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Auth</text>
<text x="296" y="412" text-anchor="middle" fill="#6b7280" font-size="10">admin accounts</text>
<text x="296" y="428" text-anchor="middle" fill="#6b7280" font-size="10">customer accounts</text>
<text x="296" y="444" text-anchor="middle" fill="#6b7280" font-size="10">optional by design</text>
<rect x="392" y="364" width="152" height="100" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="468" y="390" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Storage</text>
<text x="468" y="412" text-anchor="middle" fill="#6b7280" font-size="10">product images</text>
<text x="468" y="428" text-anchor="middle" fill="#6b7280" font-size="10">galleries</text>
<text x="604" y="20" fill="#6b7280" font-size="12">External</text>
<rect x="604" y="28" width="256" height="84" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="732" y="52" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Meta Pixel</text>
<text x="732" y="74" text-anchor="middle" fill="#6b7280" font-size="10">ViewContent · AddToCart</text>
<text x="732" y="92" text-anchor="middle" fill="#6b7280" font-size="10">InitiateCheckout · Purchase</text>
<rect x="604" y="148" width="256" height="92" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="732" y="176" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Yalidine API</text>
<text x="732" y="200" text-anchor="middle" fill="#6b7280" font-size="10">create parcels on order</text>
<text x="732" y="218" text-anchor="middle" fill="#6b7280" font-size="10">sync shipping status back</text>
<rect x="604" y="272" width="256" height="72" rx="6" fill="#141414" stroke="#262626"></rect>
<text x="732" y="300" text-anchor="middle" fill="#e5e5e5" font-size="13" font-weight="700">Telegram bot</text>
<text x="732" y="324" text-anchor="middle" fill="#6b7280" font-size="10">new-order alerts to the operator</text>
<line x1="290" y1="112" x2="290" y2="146" stroke="#6b7280" marker-end="url(#ghz-arrow)"></line>
<line x1="157" y1="284" x2="157" y2="346" stroke="#6b7280" marker-end="url(#ghz-arrow)"></line>
<text x="164" y="320" fill="#6b7280" font-size="9.5">via RLS</text>
<line x1="423" y1="284" x2="423" y2="346" stroke="#6b7280" marker-end="url(#ghz-arrow)"></line>
<text x="430" y="320" fill="#6b7280" font-size="9.5">full access</text>
<line x1="560" y1="70" x2="602" y2="70" stroke="#6b7280" marker-end="url(#ghz-arrow)"></line>
<line x1="560" y1="186" x2="602" y2="186" stroke="#6b7280" marker-end="url(#ghz-arrow)"></line>
<line x1="604" y1="212" x2="562" y2="212" stroke="#6b7280" marker-end="url(#ghz-arrow)"></line>
<polyline points="560,266 582,266 582,300 602,300" fill="none" stroke="#6b7280" marker-end="url(#ghz-arrow)"></polyline>
</svg></div>

## Data model

**Customers are phone numbers.** A cash-on-delivery buyer will not create an account to buy one item, so accounts are optional and anonymous checkout is supported. Orders key on phone number and customer history aggregates from orders. That keeps the checkout short and still gives the admin a real view of repeat buyers and lifetime spend.

## Stack

My side: PostgreSQL, Supabase, n8n. The store itself runs on Next.js, TypeScript, Vercel and the Yalidine API.
