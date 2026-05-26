# Scope and Experience

## Experience Statement

The portal will serve University of Chicago alumni and friends with an authenticated Experience Cloud experience for news, events, giving pathways, volunteer opportunities, mentorship, affinity groups, profile management, and targeted community content.

The experience should feel institutional, clear, and useful rather than promotional. Alumni should quickly understand what is relevant to them and content managers should be able to keep the site fresh from Salesforce.

## Audiences

| Audience | Needs | Notes |
| --- | --- | --- |
| Alumni | Update profile, discover events, read targeted updates, engage with groups, volunteer, give, reconnect. | Should receive personalized content based on relationship data and preferences. |
| Friends | Discover public or semi-public programs, events, giving opportunities, and community stories. | May have lighter access than verified alumni. |
| Content managers | Create, schedule, target, and retire content without code changes. | Must work through Salesforce records and approved publishing workflows. |
| Alumni relations staff | Segment audiences, review engagement, promote events, and manage program content. | Needs reporting and operational visibility. |
| Salesforce admins | Maintain fields, permission sets, page assignments, and Experience Builder configuration. | Needs stable naming, governance, and metadata boundaries. |

## Portal Capabilities

### Launch Scope

- Authenticated alumni and friends home page with targeted content zones.
- Profile summary and preference management.
- News and story listings managed from Salesforce records.
- Event discovery, featured events, and registration handoff.
- Giving and campaign promotion modules.
- Volunteer and engagement opportunity listings.
- Affinity or regional group directory.
- Content manager workflow for draft, review, scheduled, published, archived.
- Reporting foundation for content, event, and engagement performance.

### Later Scope

- Mentorship matching.
- Job board or career resource integrations.
- Discussion spaces or moderated community groups.
- Recommendation engine using engagement and preference data.
- Deeper personalization by school, class year, geography, giving history, interests, and event behavior.

## Experience Principles

- Make the first screen useful: personalized priorities, timely events, and clear next actions.
- Keep content structured: content should be assembled from records, not hard-coded page copy.
- Prefer plain editorial hierarchy over decorative complexity.
- Do not require content managers to know Experience Builder for routine publishing.
- Preserve UChicago identity through approved header, footer, logo, color, typography, and accessibility patterns.

## Open Questions

- Which Salesforce clouds and managed packages are already in place?
- Which constituent identity object is authoritative: Contact, Person Account, or another alumni data model?
- Which SSO provider will authenticate alumni and friends?
- Which event registration and giving systems are authoritative?
- Are content managers centralized, distributed by school/unit, or both?

