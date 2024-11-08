import {Locator, Page} from '@playwright/test'

export class LoginPage{
    private readonly page:Page;
    private readonly usernameTextBox:Locator;
    private readonly passwordTextBox:Locator;
    private readonly loginButton:Locator;

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