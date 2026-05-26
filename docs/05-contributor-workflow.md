# Contributor Workflow

## Collaboration Goals

This project must support Codex and other contributors working in parallel with minimal token load and minimal overwrite risk.

The rule of thumb: read the smallest relevant file, change the smallest owned area, and leave a short trace of why the change was made.

## File Ownership Pattern

| Work Type | Primary Files |
| --- | --- |
| Product scope | `docs/01-scope-and-experience.md` |
| Architecture | `docs/02-solution-architecture.md`, `docs/adr/*` |
| Salesforce content model | `docs/03-salesforce-content-model.md`, future object-specific files |
| Brand and accessibility | `docs/04-brand-accessibility.md` |
| Delivery planning | `docs/06-delivery-plan.md` |
| Contributor process | `docs/05-contributor-workflow.md` |
| Lightning Web Components | `force-app/main/default/lwc/<component-name>`, `docs/07-technical-component-inventory.md`, and `docs/component-contracts/<component-name>.md` |
| Salesforce content metadata | `force-app/main/default/objects/Portal_Content__c` and `docs/03-salesforce-content-model.md` |

When implementation begins, create one folder per functional area and add a local `README.md` that describes ownership, dependencies, and test commands.

## Token Hygiene for Codex

- Start from `docs/00-project-index.md`.
- Open only the document for the current task.
- Prefer object-specific or component-specific files over large combined documents.
- Add concise decision records instead of expanding every planning file.
- Keep examples short and link to source files instead of copying long content.
- Summarize external guidance and include links rather than pasting full source text.

## Overwrite Prevention

- Before editing, inspect the specific file you will change.
- Do not reformat unrelated sections.
- Keep one concern per change.
- Add new sections instead of rewriting broad documents unless the task is a planned rewrite.
- For metadata work, separate object, field, permission, and component changes into distinct commits or change sets.
- If a file has changed unexpectedly, assume another contributor made the change and preserve it.

## Component Documentation Rule

- Every Lightning Web Component must have an entry in `docs/07-technical-component-inventory.md`.
- Any component behavior, public property, data dependency, deployment status, or page usage change must update the inventory in the same commit.
- Components with page-level behavior or Salesforce data dependencies should also have a focused contract under `docs/component-contracts`.
- Internal child components still need an inventory row, even when they are not exposed in Experience Builder.

## Recommended Task Brief

Use [templates/contributor-brief.md](templates/contributor-brief.md) when starting a substantial task.

Every task should state:

- Goal
- Files likely to change
- Files to avoid
- Dependencies
- Acceptance criteria
- Validation steps

## ADR Policy

Create an ADR when deciding:

- Whether to use standard or custom Salesforce objects.
- How content publishing workflow will work.
- How authenticated access and portal profiles are structured.
- Which integration owns a source of truth.
- Which brand implementation approach is used.
- Any rule that future contributors must honor.

## Naming Policy

Use clear names with stable prefixes once implementation starts:

- Salesforce custom objects and fields: align to org convention first; otherwise use `Portal_*` for portal-owned metadata.
- Components: use feature-based names, such as `portalContentList`, `portalFeaturedEvents`, `portalProfileSummary`.
- Documentation: two-digit ordering for top-level docs, ADR numbering for decisions.
