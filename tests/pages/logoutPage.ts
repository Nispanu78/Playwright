import {Locator, Page} from '@playwright/test'
import BasePage from './basePage';

export class LogOut extends BasePage{
    private readonly logoutButton:Locator;
    private readonly pressLogoutButton:Locator

    constructor(page:Page) {
        super(page)
        this.logoutButton = page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon');
        this.pressLogoutButton = page.locator('//a[normalize-space()="Logout"]');
    }

    async clickLogoutButton(){
        await this.clickElement(this.logoutButton)
        await this.clickElement(this.pressLogoutButton)
    }
}