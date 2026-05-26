# ADR 0001: Manage Portal Content Through Salesforce Objects

## Status

Proposed

## Context

The alumni portal needs to let content managers maintain content without code deployments. Experience Cloud can render Salesforce records through configured components, and Salesforce already provides permissions, list views, flows, approvals, scheduling fields, reports, and audit history.

## Decision

Portal content will be modeled as Salesforce records wherever feasible. Experience Cloud pages and components should render records from approved standard or custom objects rather than relying on hard-coded page content.

## Consequences

Benefits:

- Content managers can create and update content in familiar Salesforce workflows.
- Publishing, review, and reporting can use Salesforce-native tools.
- Components can be reused across pages and audiences.
- Future contributors have stable object contracts.

Tradeoffs:

- The data model needs careful governance to avoid object sprawl.
- Rich editorial layouts may need constrained templates.
- Field-level security and sharing must be reviewed before every portal exposure.

## Follow-Up

- Inventory existing Salesforce objects before finalizing custom objects.
- Validate whether Salesforce CMS is licensed and appropriate.
- Decide which object owns each launch content type.
- Define exact content lifecycle automation.

