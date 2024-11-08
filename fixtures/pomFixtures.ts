import {test as baseTest} from '@playwright/test';
import {LandingPage} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/pages/landingPage.ts'
import {AdminPage} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/pages/adminPage.ts'
import {LoginPage} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/pages/loginPage.ts'
import {LogOut} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/pages/logoutPage.ts'

//Here we create our own custom fixtures
type pages = {
    landingPage: LandingPage,
    loginPage: LoginPage
    adminPage: AdminPage,
    logoutPage: LogOut

}

const testPages = baseTest.extend<pages>({
    landingPage: async({page}, use)=>{
        await use(new LandingPage(page))
    },

    loginPage: async({page}, use)=>{
        await use(new LoginPage(page))
    },

    adminPage: async({page}, use)=>{
        await use(new AdminPage(page))
    },

    logoutPage: async({page}, use)=>{
        await use(new LogOut(page))
    }

})

export const test = testPages
export const expect = testPages.expect