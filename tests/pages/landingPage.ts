import {Locator, Page} from '@playwright/test'

export class LandingPage{
    private readonly page:Page;
    private readonly loginButton:Locator;

    constructor(page:Page) {
        this.loginButton = page.locator('button[type="submit"]')
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}