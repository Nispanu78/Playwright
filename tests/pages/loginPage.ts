import {Locator, Page} from '@playwright/test'

export class LoginPage{
    readonly page:Page;
    readonly usernameTextBox:Locator;
    readonly passwordTextBox:Locator;
    readonly loginButton:Locator;

    constructor(page:Page) {
        this.usernameTextBox = page.locator('input[placeholder="Username"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async enterUserName(userName:string) {
        await this.usernameTextBox.fill(userName);


    }

    async enterPassword(password:string) {
        await this.passwordTextBox.fill(password);
        

    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}