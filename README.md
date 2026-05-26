# DIY Alumni and Friends Experience Cloud Portal

This workspace is the planning and delivery home for a University of Chicago aligned Salesforce Experience Cloud alumni portal.

The project is organized so Codex and human contributors can work in small, well-owned areas without needing to load or modify the whole repository at once.

## Start Here

1. Read [docs/00-project-index.md](docs/00-project-index.md) for the current map of the project.
2. Use [docs/05-contributor-workflow.md](docs/05-contributor-workflow.md) before changing scope, metadata, content model, or visual system decisions.
3. Capture major decisions as ADRs in [docs/adr](docs/adr).

## Current Intent

Build an alumni and friends portal that:

- Uses Salesforce Experience Cloud as the primary authenticated portal surface.
- Lets content managers maintain portal content through approved Salesforce records and fields, not code deploys.
- Follows University of Chicago web brand expectations for logo usage, header/footer treatment, color, typography, and accessibility.
- Keeps project documentation modular so future contributors can work with minimal token usage and low overwrite risk.

## POC Sandbox

Use the POC Experience Cloud site for sandbox validation:

https://uchicagoard--poc.sandbox.my.site.com/AlumniAndFriends

## Repository Shape

```text
docs/
  00-project-index.md              Project map and source-of-truth guide
  01-scope-and-experience.md       Portal audiences, journeys, and features
  02-solution-architecture.md      Salesforce and Experience Cloud architecture
  03-salesforce-content-model.md   Content management object strategy
  04-brand-accessibility.md        UChicago brand and accessibility rules
  05-contributor-workflow.md       Collaboration, file ownership, and token hygiene
  06-delivery-plan.md              Phased implementation plan
  adr/                             Architecture decision records
  templates/                       Briefs and reusable planning templates
force-app/
  main/default/lwc/                 Experience Cloud Lightning Web Components
  main/default/objects/             Salesforce content model metadata
  main/default/permissionsets/      Content operations permission sets
config/
  project-scratch-def.json          Starter Salesforce development org shape
  environments.json                 Known Salesforce environment URLs and aliases
```

## Brand Sources Checked

- UChicago Website Resource Center, Web Brand Identity Guidelines: https://websites.uchicago.edu/policies-standards/web-brand-identity-guidelines/
- UChicago Creative, Brand Identity Guidelines: https://creative.uchicago.edu/brand-identity-guidelines-3/
