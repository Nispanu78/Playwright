import {Locator, Page} from '@playwright/test'
import BasePage from './basePage';

export class AdminPage extends BasePage {
    private readonly adminButton:Locator;

    constructor(page:Page) {
        super(page)
        this.adminButton = page.locator('.oxd-main-menu-item.active')
    }

    async clickAdminButton(){
        await this.clickElement(this.adminButton)
    }
}