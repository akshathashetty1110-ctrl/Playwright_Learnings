import { WelcomePage } from "./02-welcomePage";

export class HomePage extends WelcomePage{

    async clickOnLeads(){
        await this.page.locator('//a[text()="Leads"]').click()
    }

    async ClickOnAccounts(){
        await this.page.locator('//a[text()="Accounts"]').click()
    }
}