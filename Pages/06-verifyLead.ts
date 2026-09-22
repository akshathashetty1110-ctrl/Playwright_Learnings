import { CreateLeadPage } from "./05-createLeadPage";

export class viewLeadPage extends CreateLeadPage{

    async verifyLead(){
        let fName = await this.page.locator('#viewLead_firstName_sp').innerText()
        console.log(fName);
        
    }
}