import { LightningElement } from 'lwc';

export default class PortalNavigation extends LightningElement {
    isMenuOpen = false;

    get menuClass() {
        return this.isMenuOpen ? 'primary-nav is-open' : 'primary-nav';
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}

