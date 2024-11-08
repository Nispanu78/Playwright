import {Locator, Page} from '@playwright/test'

export class LandingPage{
    readonly page:Page;
    readonly loginButton:Locator;

    constructor(page:Page) {
        this.loginButton = page.locator('button[type="submit"]')
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}