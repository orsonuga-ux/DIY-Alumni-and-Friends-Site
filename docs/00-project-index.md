# Project Index

This file is the navigation layer for the portal project. Keep it short. Add links here when new durable project documents are created.

## Core Documents

| Document | Purpose | Primary Owners |
| --- | --- | --- |
| [01-scope-and-experience.md](01-scope-and-experience.md) | What the portal does, who it serves, and what journeys matter. | Product, alumni engagement, UX |
| [02-solution-architecture.md](02-solution-architecture.md) | How Salesforce, Experience Cloud, integrations, security, and environments fit together. | Salesforce architects, technical leads |
| [03-salesforce-content-model.md](03-salesforce-content-model.md) | How content managers own content using Salesforce objects, records, fields, permissions, and publishing workflow. | Salesforce admins, content operations |
| [04-brand-accessibility.md](04-brand-accessibility.md) | UChicago brand constraints, design tokens, accessibility expectations, and review checklist. | Design, frontend, content |
| [05-contributor-workflow.md](05-contributor-workflow.md) | How contributors avoid overwrites, reduce context size, and document decisions. | Everyone |
| [06-delivery-plan.md](06-delivery-plan.md) | Phased delivery plan, milestone gates, and acceptance criteria. | Delivery lead, product, engineering |
| [07-technical-component-inventory.md](07-technical-component-inventory.md) | Living inventory of Experience Cloud components, descriptions, status, and dependencies. | Technical leads, Salesforce developers |

## Implementation Areas

| Area | Path | Purpose |
| --- | --- | --- |
| Salesforce source | [../force-app](../force-app) | Salesforce DX metadata, Lightning Web Components, objects, fields, and permission sets. |
| Technical component inventory | [07-technical-component-inventory.md](07-technical-component-inventory.md) | Required companion doc for component changes. |
| Component contracts | [component-contracts](component-contracts) | Small, durable contracts for Experience Cloud components. |
| Scratch org config | [../config/project-scratch-def.json](../config/project-scratch-def.json) | Starter Salesforce development org shape. |
| Environment registry | [../config/environments.json](../config/environments.json) | Known sandbox and site URLs used for validation. |

## Decision Records

Architecture decisions live in [adr](adr). Create a new ADR when a choice changes system behavior, object ownership, security posture, integration strategy, or contributor workflow.

Current ADRs:

- [0001-content-managed-salesforce-objects.md](adr/0001-content-managed-salesforce-objects.md)

## Contribution Rule

Before adding implementation files, add or update the smallest relevant planning document first. This keeps contributors aligned without requiring everyone to reread the entire workspace.
