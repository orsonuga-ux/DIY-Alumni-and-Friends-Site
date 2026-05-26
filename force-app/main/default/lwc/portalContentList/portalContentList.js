import { LightningElement, api } from 'lwc';

const SAMPLE_RECORDS = [
    {
        id: 'sample-1',
        title: 'Alumni Weekend Registration Opens',
        summary: 'Explore featured gatherings, school events, and ways to reconnect with the UChicago community.',
        contentType: 'Announcement',
        ctaLabel: 'View events',
        ctaUrl: '/s/events'
    },
    {
        id: 'sample-2',
        title: 'Volunteer With a Regional Club',
        summary: 'Find alumni-led opportunities to host, mentor, and support students and graduates near you.',
        contentType: 'Volunteer',
        ctaLabel: 'Browse opportunities',
        ctaUrl: '/s/volunteer'
    }
];

export default class PortalContentList extends LightningElement {
    @api heading = 'Featured for you';
    @api kicker = 'Alumni and friends';
    @api emptyStateMessage = 'No featured content is available right now.';
    @api useSampleData = false;

    get records() {
        return this.useSampleData ? SAMPLE_RECORDS : [];
    }

    get hasRecords() {
        return this.records.length > 0;
    }
}

