import test from "@playwright/test";
import { loginPage } from "../Pages/01-loginPage";
import { WelcomePage } from "../Pages/02-welcomePage";
import { HomePage } from "../Pages/03-homePage";
import { LeadPage } from "../Pages/04-leadPage";
import { CreateLeadPage } from "../Pages/05-createLeadPage";
import { viewLeadPage } from "../Pages/06-verifyLead";

test('create Lead using POM',async({page})=>{
    let lp = new loginPage(page)

    await lp.LoadUrl('https://leaftaps.com/opentaps/control/login')
    await lp.EnterCredentials('democsr','crmsfa')
    await lp.ClickonLogin()

    let wp = new WelcomePage(page)
    await wp.clickOnCRMSFA()

    let hp = new HomePage(page)
    await hp.clickOnLeads()

    let lep = new LeadPage(page)
    await lep.clickOnCreateLeadTab()

    let cl = new CreateLeadPage(page)
    await cl.EnterMandatorydata()
    await cl.clickOnCreateLeadButton()

    let vp = new viewLeadPage(page)
    await vp.verifyLead()


})