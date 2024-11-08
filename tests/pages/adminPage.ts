import {Locator, Page} from '@playwright/test'

export class AdminPage{
    readonly page:Page;
    readonly adminButton:Locator;

    constructor(page:Page) {
        this.adminButton = page.locator('.oxd-main-menu-item.active')
    }

    async clickAdminButton(){
        await this.adminButton.click();
    }
}