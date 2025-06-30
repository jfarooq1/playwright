test('First Test', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Second Test', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard')
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

})