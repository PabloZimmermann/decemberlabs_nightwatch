describe("Test Get In Touch Form", function () {
    let inHousePage

    before(function (browser, done) {
        inHousePage = browser.page.home()
        done()
    })

    it("should open the modal when Get In Touch link is clicked", function (browser) {
        inHousePage.navigate().click("@getInTouchLink")
        inHousePage.expect.element("@modal").to.be.visible
        inHousePage.expect.element("@modalTitle").text.to.equal("Get In Touch")
    })

    it("should show error when send button is clicked without filling the form", function (browser) {
        inHousePage.click("@sendButton")
        inHousePage.expect
            .element("@nameInput")
            .to.have.attribute("class")
            .which.contains("wpforms-error")
        inHousePage.expect
            .element("@emailInput")
            .to.have.attribute("class")
            .which.contains("wpforms-error")
        inHousePage.expect
            .element("@companyNameInput")
            .to.have.attribute("class")
            .which.contains("wpforms-error")
        inHousePage.expect
            .element("@messageInput")
            .to.have.attribute("class")
            .which.contains("wpforms-error")
    })

    it.only("should successfully fill the form and send it", async function (browser) {
        await inHousePage.navigate().click("@getInTouchLink")

        await inHousePage.setName("John Doe")
        await inHousePage.verifyName()

        await inHousePage.setEmail("john.doe@example.com")
        browser.keys(browser.Keys.TAB)
        await inHousePage.verifyEmail()

        await inHousePage.setCompany("Acome Corp")
        await inHousePage.verifyCompany()

        await inHousePage.setMessage("Hello, World!")
        await inHousePage.verifyMessage()

        await inHousePage.click("@sendButton")
    })

    after(function (browser, done) {
        browser.end()
        done()
    })
})
