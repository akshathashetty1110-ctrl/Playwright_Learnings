import { Page } from "@playwright/test";

export class loginPage {

    page:Page //global property

    constructor(page:Page){
        this.page = page
    }

    async LoadUrl(url:string){
        await this.page.goto(url)
    }

    async EnterCredentials(username:string, password:string){
        await this.page.locator('#username').fill(username)
        await this.page.locator('#password').fill(password)
    }

    async ClickonLogin(){
        await this.page.locator('.decorativeSubmit').click()
    }

}