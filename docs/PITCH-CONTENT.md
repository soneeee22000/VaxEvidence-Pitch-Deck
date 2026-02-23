# VaxEvidence Pitch Deck — Content Reference

This document captures the narrative, key data points, and messaging used across all 11 slides. Use it as the source of truth when updating slide content or repurposing for other materials.

---

## Slide 1: Title

- **Tagline:** Real-World Evidence Platform for Vaccine Scientists
- **Subtitle:** From Data to Regulatory Decision in Days, Not Months
- **Location:** Station F, Paris
- **Date:** February 2026

---

## Slide 2: The Problem — The Manual RWE Crisis

Vaccine effectiveness studies take **6+ months** and cost **$50K+** due to manual processes.

| Metric | Value | Context |
|--------|-------|---------|
| Time per study | 6+ months | Protocol to publication |
| Time per review | 15+ hours | Manual paper screening |
| Cost per study | $50K+ | Personnel + database costs |

**Founder quote:** Dr. Tin Tin Htar Myint spent 4 years at Pfizer doing this manually — every vaccine effectiveness study was a 6-month marathon.

---

## Slide 3: Market Opportunity

- **Total market:** $48B RWE market by 2032
- **Growth rate:** 13.3% CAGR
- **Regulatory driver:** FDA's 21st Century Cures Act requires RWE integration
- **Post-COVID tailwind:** Vaccine surveillance is now permanent infrastructure
- **The gap:** Only 35 products included RWE in FDA submissions since 2016. No specialized tools exist for vaccine-specific RWE.

---

## Slide 4: Solution — AI-Powered Vaccine RWE Platform

End-to-end vaccine RWE workflow with regulatory-ready exports.

| Feature | Description |
|---------|-------------|
| **Protocol Builder** | PICO-based protocol design with versioning, diff viewer, digital signatures, and 21 CFR Part 11 audit trail |
| **PRISMA Screening** | 4-stage systematic review pipeline with duplicate detection, risk-of-bias assessment (RoB 2 / ROBINS-I), and meta-analysis forest plots |
| **Regulatory Export** | One-click FDA IND (21 CFR 312.23), eCTD Module 5 (ICH M4E(R2)), CDISC/SDTM templates, CONSORT/STROBE/GCP checklists |
| **Real-Time Collaboration** | Live co-editing via CRDT, presence indicators, field cursors, threaded comments with @mentions, review workflows |

---

## Slide 5: What's Built — Production-Ready Platform

Not a prototype — a fully engineered, tested, and deployed system.

| Metric | Value |
|--------|-------|
| Development phases completed | 12 |
| Database tables (with RLS security) | 30 |
| Tests (unit + integration + E2E) | 1,574 |
| SQL migrations applied | 20 |

### Platform capabilities:
- **Core Platform:** Protocol builder, evidence library (PubMed/ClinicalTrials.gov import), dataset management, multi-format export (PDF/Word/CSV/ZIP)
- **Systematic Review:** PRISMA screening pipeline, duplicate detection, RoB 2 + ROBINS-I assessment, forest plots for meta-analysis
- **Regulatory Compliance:** FDA IND packages, eCTD Module 5, CDISC/SDTM templates, CONSORT/STROBE/GCP checklists
- **Collaboration:** Real-time Yjs CRDT editing, presence & cursors, @mention notifications, review workflows, workspaces with RBAC

---

## Slide 6: Why We Win — Competitive Advantage

Built BY vaccine scientists FOR vaccine scientists.

| Capability | Covidence / Rayyan | VaxEvidence |
|------------|-------------------|-------------|
| Research focus | Generic for all medical research | Purpose-built for vaccines |
| Vaccine workflows | No vaccine-specific workflows | Full PICO protocol builder |
| Protocol design | No protocol design tools | Integrated protocol design |
| Regulatory exports | Limited | FDA IND + eCTD + SDTM export |
| Screening | Basic | PRISMA screening + meta-analysis |
| Collaboration | No real-time collaboration | Real-time team collaboration |

**Key claim:** Complete end-to-end platform — no competitor offers this.

---

## Slide 7: Business Model — B2B SaaS Pricing

Tiered by organization size (per seat/year):

| Tier | Price |
|------|-------|
| Academic / Startup | $3K |
| Mid-size Biotech | $15K |
| Big Pharma | $50K |

### 3-Year Revenue Projections

| Year | Customers | Avg Price | Revenue |
|------|-----------|-----------|---------|
| Year 1 | 10 | $15K | $150K |
| Year 2 | 40 | $20K | $800K |
| Year 3 | 100 | $25K | $2.5M |

---

## Slide 8: Go-to-Market — Network-First Strategy

500+ warm leads from Day 1.

### Phase 01: Warm Network (Months 1–6)
- 5 pilot customers
- Pfizer, Sanofi contacts
- ECDC/PROMISE network
- Academic institutions

### Phase 02: Industry (Months 7–12)
- Conference presentations
- Case study publications
- LinkedIn thought leadership
- CRO partnerships

### Phase 03: Scale (Year 2+)
- Sales team
- Top 50 pharma/biotech
- ECDC/WHO partnerships
- Expand to infectious diseases

**Key advantage:** Dr. Tin Tin's 15-year network provides direct access to decision-makers at Pfizer, Sanofi, ECDC, and academic institutions.

---

## Slide 9: Team — Perfect Founder-Market Fit

15 years domain expertise meets full-stack AI capabilities.

### Dr. Tin Tin Htar Myint — Co-Founder & CEO
- 13 years at Pfizer (Global Epi Lead)
- 15+ years vaccine RWE experience
- Led EU PROMISE & ADVANCE consortia
- 33+ peer-reviewed publications
- Oxford Strategic Leadership (2025)

### Pyae Sone Kyaw — Co-Founder & CTO
- Dual Master's: Telecom SudParis + AIT
- Built entire VaxEvidence platform (12 phases)
- Next.js 16, TypeScript, Supabase, AI/ML
- 1,574 tests, 30 DB tables, 20 migrations
- Station F, Paris — Founding AI Engineer

### Why this team wins:
1. **Domain Expertise** — Dr. Tin Tin lived the problem for 15 years at Pfizer
2. **Technical Execution** — Full-stack AI to build and iterate fast
3. **Network Access** — 500+ warm leads to pharma decision-makers

---

## Slide 10: Roadmap — Next 12 Months

Platform built — now commercialize.

| Quarter | Status | Key Milestones |
|---------|--------|----------------|
| Q1 2026 | **DONE** | 12 dev phases shipped; protocol builder, PRISMA screening, regulatory exports, real-time collaboration, enterprise features |
| Q2 2026 | Months 3–6 | Onboard 5 pilot customers from Dr. Tin Tin's network; present at ESPID conference (May 2026); collect feedback and iterate |
| Q3–Q4 2026 | Months 7–12 | Convert pilots to paid ($30K–$150K ARR target); publish case studies, build social proof; prepare for seed round |

---

## Slide 11: The Ask — $1.5M Seed Round

18-month runway to $500K ARR.

### Use of Funds
| Category | Allocation |
|----------|-----------|
| Product Development | 40% |
| Sales & Marketing | 30% |
| Team Expansion | 20% |
| Operations | 10% |

### 18-Month Milestones
- 50+ paying customers
- $500K ARR with 70%+ margins
- 5 published case studies
- Series A ready

### Contact
- **Email:** hello@vaxevidence.com
- **Location:** Station F, Paris
- **Website:** www.vaxevidence.com
