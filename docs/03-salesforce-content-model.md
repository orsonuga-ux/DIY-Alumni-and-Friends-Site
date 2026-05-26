# Salesforce Content Model

## Goal

Content managers should be able to manage portal content through Salesforce records, fields, list views, flows, and approval/publishing controls. Routine content changes should not require code edits, deployment, or direct Experience Builder changes.

## Content Types

| Content Type | Purpose | Recommended Record Shape |
| --- | --- | --- |
| Announcement | Time-sensitive updates for the home page or audience-specific zones. | Title, summary, body, priority, start/end date, audience, CTA, status. |
| Story or news item | Editorial content for alumni and friends. | Title, deck, body, image, author/unit, publish date, topics, audience, status. |
| Event promotion | Featured event display and registration handoff. | Event reference, title override, summary, date/time, location, CTA URL, audience, status. |
| Giving promotion | Campaign or fund callout. | Campaign reference, message, CTA, image, audience, status. |
| Volunteer opportunity | Program or action alumni can take. | Title, description, location/remote, commitment, owner, CTA, audience, status. |
| Group profile | Affinity, regional, school, or class group listing. | Name, type, description, contact, image, external links, eligibility, status. |
| Resource link | Curated links and downloads. | Title, description, URL/file, topic, audience, status. |

## Proposed Custom Objects

Names are placeholders until validated against existing objects and naming conventions.

| Object | Responsibility |
| --- | --- |
| `Portal_Content__c` | Main reusable editorial content record for announcements, stories, resources, and promotions. |
| `Portal_Content_Audience__c` | Junction object connecting content to one or more target audiences or segments. |
| `Portal_Topic__c` | Controlled vocabulary for interest, content, and navigation grouping. |
| `Engagement_Opportunity__c` | Structured volunteer, mentorship, and participation opportunities where Campaign is not sufficient. |
| `Alumni_Group__c` | Affinity, regional, class, school, and interest group profiles if no existing object fits. |

## Core Fields for `Portal_Content__c`

| Field | Type | Notes |
| --- | --- | --- |
| `Name` | Text | Internal content name. |
| `Content_Title__c` | Text | Public title. |
| `Content_Summary__c` | Long Text | Listing and card summary. |
| `Content_Body__c` | Rich Text | Full body where rich text is allowed. |
| `Content_Type__c` | Picklist | Announcement, Story, Event Promotion, Giving Promotion, Resource. |
| `Status__c` | Picklist | Draft, In Review, Scheduled, Published, Archived. |
| `Publish_Start__c` | Date/Time | First eligible display date. |
| `Publish_End__c` | Date/Time | Optional retirement date. |
| `Priority__c` | Number or Picklist | Used for ordering featured content. |
| `Primary_Image__c` | URL/File reference | Must use approved assets and alt text. |
| `Image_Alt_Text__c` | Text | Required when image is present. |
| `CTA_Label__c` | Text | Short action label. |
| `CTA_URL__c` | URL | Destination for call to action. |
| `Audience_Mode__c` | Picklist | Public, Authenticated, Targeted. |
| `Owning_Unit__c` | Picklist/Lookup | School, unit, program, or office owner. |
| `Review_Notes__c` | Long Text | Internal-only field. Never expose in portal. |

## Publishing Workflow

1. Author creates or updates a content record in Draft.
2. Author submits for review.
3. Reviewer checks brand, accessibility, audience, links, and dates.
4. Publisher approves Scheduled or Published status.
5. Portal components render only records that are Published and within date range.
6. Scheduled automation archives expired records or removes them from active lists.

## Content Manager Permission Sets

| Permission Set | Capabilities |
| --- | --- |
| Portal Content Author | Create and edit own Draft records. Submit for review. |
| Portal Content Reviewer | Review content, request changes, validate brand/accessibility fields. |
| Portal Content Publisher | Publish, schedule, archive, and manage priority. |
| Portal Content Admin | Manage topics, audiences, controlled vocabularies, and page placement settings. |

## Component Contract

Each portal component should declare:

- Object(s) queried.
- Required fields.
- Visibility rules.
- Sorting rules.
- Empty state behavior.
- Content manager controls.
- Accessibility requirements.

Store those contracts with the component implementation once code begins.

