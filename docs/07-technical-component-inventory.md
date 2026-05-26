# Technical Component Inventory

This is the living technical inventory for Salesforce Experience Cloud components in this project. Keep this document current whenever components are added, renamed, removed, deployed, or materially changed.

## Maintenance Rule

Any change to `force-app/main/default/lwc` must include an update to this document in the same commit unless the change is purely formatting and does not affect behavior, public properties, data dependencies, or page usage.

## Lightning Web Components

| Component | Status | Exposed in Experience Builder | Short Description | Data Dependencies | Notes |
| --- | --- | --- | --- | --- | --- |
| `portalHomeShell` | Deployed to POC | Yes | Top-level alumni portal home page shell that composes the brand header and featured content regions. | Child components only; does not query records directly. | Place this on an Experience Cloud page to preview the modern home shell. |
| `portalBrandHeader` | Deployed to POC | Yes | UChicago-aware portal header shell with brand link and primary portal navigation. | None. | Uses a placeholder brand mark until approved UChicago assets are added. |
| `portalContentList` | Deployed to POC | Yes | Record-list section for featured announcements, stories, events, giving promotions, resources, and opportunities. | Planned: `Portal_Content__c`. Current: optional sample records. | Data wiring is intentionally deferred until object contracts and security are finalized. |
| `portalContentCard` | Deployed to POC | No | Reusable presentation card for a single content item, including type, title, summary, image, and CTA. | Receives values from parent components. | Internal child component used by `portalContentList`. |

## Salesforce Metadata Supporting Components

| Metadata | Status | Short Description | Notes |
| --- | --- | --- | --- |
| `Portal_Content__c` | Deployed to POC | Custom object for structured portal content managed in Salesforce. | Starter model for content-manager-owned portal content. |
| `Portal_Content_Author` | Deployed to POC | Permission set for content managers who create and maintain draft portal content. | Permissions will need refinement as publishing workflow matures. |

## Experience Cloud Placement

Deployment makes components available in the POC sandbox, but the public portal will not visually change until components are placed on pages in Experience Builder and the site is published.

POC site:

https://uchicagoard--poc.sandbox.my.site.com/AlumniAndFriends

Recommended first placement:

1. Open `Setup`.
2. Go to `Digital Experiences`.
3. Open `All Sites`.
4. Open `AlumniAndFriends`.
5. Launch `Builder`.
6. Add `Portal Home Shell` to a draft page.
7. Preview, then publish when ready.

## Update Checklist

When a component changes, update:

- Component row in this document.
- Component contract under `docs/component-contracts` when public properties, data rules, or accessibility requirements change.
- Local component `README.md` if the change affects contributor workflow.
- Salesforce deployment status after deploying to POC, UAT, or production.

