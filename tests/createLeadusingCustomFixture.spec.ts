import test from "@playwright/test";
import { loginPage } from "../Pages/01-loginPage";
import { WelcomePage } from "../Pages/02-welcomePage";
import { HomePage } from "../Pages/03-homePage";
import { LeadPage } from "../Pages/04-leadPage";
import { CreateLeadPage } from "../Pages/05-createLeadPage";
import { viewLeadPage } from "../Pages/06-verifyLead";
import { test1 } from "../Utils/customFixture";
import dotenv from "dotenv"

dotenv.config({path:'Data/qa.env'})

test1('create Lead using POM Custom Fixture',async(
    {loginfix,welfix,homfix,leadfix,crleadfix,vpfix})=>{

        await loginfix.LoadUrl(process.env.L_URL as string)
        await loginfix.EnterCredentials(process.env.L_UserName as string,
            process.env.L_Password as string
        )
        await loginfix.ClickonLogin()
        await welfix.clickOnCRMSFA()
        await homfix.clickOnLeads()
        await leadfix.clickOnCreateLeadTab()
        await crleadfix.EnterMandatorydata()
        await crleadfix.clickOnCreateLeadButton()
        await vpfix.verifyLead()


    // let lp = new loginPage(page)

    // await lp.LoadUrl('https://leaftaps.com/opentaps/control/login')
    // await lp.EnterCredentials('democsr','crmsfa')
    // await lp.ClickonLogin()

    // let wp = new WelcomePage(page)
    // await wp.clickOnCRMSFA()

    // let hp = new HomePage(page)
    // await hp.clickOnLeads()

    // let lep = new LeadPage(page)
    // await lep.clickOnCreateLeadTab()

    // let cl = new CreateLeadPage(page)
    // await cl.EnterMandatorydata()
    // await cl.clickOnCreateLeadButton()

    // let vp = new viewLeadPage(page)
    // await vp.verifyLead()


})