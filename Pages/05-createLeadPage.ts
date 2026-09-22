import { LeadPage } from "./04-leadPage";

export class CreateLeadPage extends LeadPage{

    async EnterMandatorydata(){

        await this.page.locator('#createLeadForm_companyName').fill('Testleaf')
        await this.page.locator('#createLeadForm_firstName').fill('Murali')
        await this.page.locator('#createLeadForm_lastName').fill('Nagaraj')
    }

    async clickOnCreateLeadButton(){
        await this.page.locator('.smallSubmit').click()
    }
}