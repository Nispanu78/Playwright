import {Locator, Page} from '@playwright/test'
import BasePage from './basePage';

export class LoginPage extends BasePage{
    private readonly usernameTextBox:Locator;
    private readonly passwordTextBox:Locator;
    private readonly loginButton:Locator;

    constructor(page:Page) {
        super(page);
        this.usernameTextBox = page.locator('input[placeholder="Username"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async enterUserName(userName:string) {
        await this.fillFormField(this.usernameTextBox,userName);


    }

    async enterPassword(password:string) {
        await this.fillFormField(this.passwordTextBox,password);
        

    }

    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }
}