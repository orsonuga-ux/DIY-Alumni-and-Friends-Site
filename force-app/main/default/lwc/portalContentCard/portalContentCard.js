import { LightningElement, api } from 'lwc';

export default class PortalContentCard extends LightningElement {
    @api title;
    @api summary;
    @api contentType;
    @api imageUrl;
    @api imageAltText = '';
    @api ctaLabel = 'Learn more';
    @api ctaUrl;
}

