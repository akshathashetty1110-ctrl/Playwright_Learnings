import { loginPage } from "./01-loginPage";

export class WelcomePage extends loginPage{

    async clickOnCRMSFA(){
        await this.page.locator('text=CRM/SFA').click()
    }

    async clickOnLogout(){
        await this.page.locator('.decorativeSubmit').click()
    }

}