# Solution Architecture

## Target Platform

- Salesforce Experience Cloud for the portal.
- Salesforce standard and custom objects for structured content management.
- Salesforce permissions, sharing, and audiences for targeted visibility.
- Experience Builder for page composition using reusable, record-driven components.
- Salesforce reports and dashboards for operational insight.

## Architectural Principles

- Content lives in Salesforce records wherever feasible.
- Components render content from stable object contracts.
- Page layouts and Experience Builder configuration should avoid embedding long-lived editorial copy.
- Permission sets, groups, and sharing rules define who can create, review, publish, and view content.
- Data model changes need an ADR when they affect ownership, security, integration, or publishing workflow.

## Logical Layers

| Layer | Responsibility |
| --- | --- |
| Identity and access | Authentication, profile assignment, audience segmentation, portal membership. |
| Content operations | Authoring, review, scheduling, targeting, and retirement of portal content. |
| Experience presentation | Pages, navigation, components, themes, brand assets, and responsive behavior. |
| Constituent data | Contact/account records, affiliations, preferences, class year, geography, interests. |
| Engagement data | Event participation, volunteer activity, giving campaign interactions, content analytics. |
| Integrations | SSO, events, giving, email marketing, analytics, data warehouse, asset storage. |

## Recommended Salesforce Object Approach

Use standard Salesforce objects when they already model the business concept well, and custom objects where portal-specific editorial structure is needed.

| Need | Candidate Object Strategy |
| --- | --- |
| Alumni/friend identity | Contact or Person Account, depending on existing org model. |
| Profile preferences | Contact fields, related preference object, or existing consent/preference object. |
| Events | Existing campaign/event object, Salesforce Event, or managed package event object. |
| Giving campaigns | Campaign records or existing advancement/giving integration object. |
| News/stories | Custom `Portal_Content__c` or CMS content records, depending on licensing and governance. |
| Opportunities to engage | Custom `Engagement_Opportunity__c` or Campaign records where campaign membership is meaningful. |
| Groups/chapters | Custom `Alumni_Group__c`, Account hierarchy, or existing affiliation object. |
| Content targeting | Junction object such as `Portal_Content_Audience__c` or Experience Cloud audiences backed by fields. |

## Security Model

- Use least-privilege permission sets for content authors, reviewers, publishers, and portal users.
- Keep publishing authority separate from drafting authority.
- Avoid exposing internal notes, operational fields, or integration keys to portal profiles.
- Use sharing sets or sharing rules aligned to authenticated portal profile needs.
- Review field-level security for every field rendered in Experience Cloud.

## Environment Strategy

| Environment | Purpose |
| --- | --- |
| POC sandbox | Primary proof-of-concept build and validation environment. |
| Developer sandbox | Isolated metadata work and component prototyping. |
| Integration sandbox | Combined feature validation and integration testing. |
| UAT sandbox | Stakeholder review, content manager testing, accessibility review. |
| Production | Live portal and production publishing workflows. |

## Known Experience Cloud Sites

| Environment | Site | URL |
| --- | --- | --- |
| POC sandbox | AlumniAndFriends | https://uchicagoard--poc.sandbox.my.site.com/AlumniAndFriends |

## Integration Inventory Placeholder

Create one integration note per system before implementation starts:

- System name
- Business owner
- Technical owner
- Direction of data flow
- Authentication approach
- Sync frequency
- Error handling
- Data retention and privacy constraints
