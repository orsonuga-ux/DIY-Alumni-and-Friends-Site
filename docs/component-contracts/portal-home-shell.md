# Component Contract: Portal Home Shell

## Purpose

Provides the top-level Experience Cloud home page composition for alumni and friends.

## Public Controls

| Property | Purpose |
| --- | --- |
| `headline` | Home page heading managed in Experience Builder. |
| `subhead` | Supporting home page text managed in Experience Builder. |

## Dependencies

- `portalBrandHeader`
- `portalContentList`

## Data

This shell should not query Salesforce records directly. It composes record-driven child components.

## Accessibility

- Main content must be wrapped in a semantic `main` element.
- Page regions must have accessible labels or headings.
- Header navigation must remain keyboard accessible.

## Launch Notes

- Replace placeholder brand mark with approved UChicago brand asset.
- Confirm final homepage personalization zones before adding additional child components.

