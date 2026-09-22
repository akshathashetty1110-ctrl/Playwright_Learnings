import {test as base}from "@playwright/test";
import { loginPage } from "../Pages/01-loginPage";
import { WelcomePage } from "../Pages/02-welcomePage";
import { HomePage } from "../Pages/03-homePage";
import { LeadPage } from "../Pages/04-leadPage";
import { CreateLeadPage } from "../Pages/05-createLeadPage";
import { viewLeadPage } from "../Pages/06-verifyLead";

type myFixture = {

    loginfix : loginPage
    welfix : WelcomePage
    homfix : HomePage
    leadfix : LeadPage
    crleadfix : CreateLeadPage
    vpfix : viewLeadPage
}

//test1 is the new test runner instead of test
//const test1 = {it has existing test features}=> page fixture +extra features 
// (creation of object)=> object fixture



export const test1 = base.extend<myFixture>({
//key:value
//fixture function

loginfix: async({page},use)=>{
    const lop = new loginPage(page)
    await use(lop)// here use() tell take this object and give to the test case
},
welfix:async({page},use)=>{
    const wp = new WelcomePage(page)
    await use(wp)
},
homfix:async({page},use)=>{
    const hp = new HomePage(page)
    await use(hp)
},
leadfix:async({page},use)=>{
    const lp = new LeadPage(page)
    await use(lp)
},
crleadfix:async({page},use)=>{
    const clp = new CreateLeadPage(page)
    await use(clp)
},
vpfix:async({page},use)=>{
    const vp = new viewLeadPage(page)
    await use(vp)
}

})