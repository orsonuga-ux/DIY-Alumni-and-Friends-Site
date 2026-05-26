# Component Contract: Portal Content List

## Purpose

Displays a list of published portal content records for a page region such as featured stories, announcements, giving promotions, or volunteer opportunities.

## Public Controls

| Property | Purpose |
| --- | --- |
| `heading` | Section heading. |
| `kicker` | Optional short category label. |
| `emptyStateMessage` | Message displayed when no content is available. |
| `useSampleData` | Temporary preview flag until Apex or GraphQL data wiring is added. |

## Salesforce Data Contract

Planned object:

- `Portal_Content__c`

Planned fields:

- `Content_Title__c`
- `Content_Summary__c`
- `Content_Type__c`
- `Status__c`
- `Publish_Start__c`
- `Publish_End__c`
- `CTA_Label__c`
- `CTA_URL__c`
- `Image_Alt_Text__c`

## Visibility Rules

Render records only when:

- `Status__c = Published`
- `Publish_Start__c` is blank or earlier than the current date/time
- `Publish_End__c` is blank or later than the current date/time
- The current user belongs to the target audience when audience targeting is enabled

## Empty State

Show one concise sentence. Do not expose query errors or internal object names to portal users.

## Accessibility

- Section must have a heading.
- Images must have meaningful alt text when informative.
- CTA link text must be clear out of context.

