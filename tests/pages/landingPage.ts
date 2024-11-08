import {Page, Locator} from '@playwright/test'
import BasePage from './basePage';

export class LandingPage extends BasePage{
     private readonly loginButton:Locator;

    constructor(page:Page) {
        super(page);
        this.loginButton = page.locator('button[type="submit"]')
    }

    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }
}