import { LightningElement, api } from 'lwc';

export default class PortalHomeShell extends LightningElement {
    @api headline = 'Welcome back to UChicago';
    @api subhead = 'Discover events, stories, giving opportunities, and ways to stay connected.';
}

