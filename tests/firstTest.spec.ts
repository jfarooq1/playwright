import { test } from '@playwright/test'


test.only('Forms Page', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})

test('First Test', async ({ page }) => {
    //Locator Syntax Rules
    // page.locator('tagname')
    // page.locator('#id')
    // page.locator('.classname')
    // page.locator('[attribute="value"]')
    // page.locator('[class=""]')
    // page.locator('Full Atrribute')
    // page.locator('Full Class Name')
    // page.locator(':Text("")')
    // page.locator(':text-is(")')

    //User Facing Locators
    await page.getByRole('textbox', { name: "Email" }).first().click()
    await page.getByPlaceholder('Jane Doe').click()
    await page.getByText('Submit').first().click()


    //Child locators
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()



})

test('Login', async ({ page }) => {
    var basicForm = page.locator('nb-card', { hasText: "Basic form" })
    basicForm
})

