import {Locator, Page} from '@playwright/test'

export class LogOut{
    readonly page:Page;
    readonly logoutButton:Locator;
    readonly pressLogoutButton:Locator

    constructor(page:Page) {
        this.logoutButton = page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon');
        this.pressLogoutButton = page.locator('//a[normalize-space()="Logout"]');
    }

    async clickLogoutButton(){
        await this.logoutButton.click();
        await this.pressLogoutButton.click();
    }
}