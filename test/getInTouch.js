describe("Test Get In Touch Form", function () {
    let inHousePage

    before(function (browser, done) {
        inHousePage = browser.page.home()
        done()
    })

    beforeEach(async function (browser, done) {
        await inHousePage.prepareTest()
        done()
    })

    it("should open the modal when Get In Touch link is clicked", async function () {
        await inHousePage.expect.element("@modal").to.be.visible
        await inHousePage.expect.element("@modalTitle").text.to.equal("Get In Touch")
    })

    it("should show error when send button is clicked without filling the form", async function () {
        await inHousePage.click("@sendButton")
        await inHousePage.expect
            .element("@nameInput")
            .to.have.attribute("class")
            .which.contains("wpforms-error")
        await inHousePage.expect
            .element("@emailInput")
            .to.have.attribute("class")
            .which.contains("wpforms-error")
        await inHousePage.expect
            .element("@companyNameInput")
            .to.have.attribute("class")
            .which.contains("wpforms-error")
        await inHousePage.expect
            .element("@messageInput")
            .to.have.attribute("class")
            .which.contains("wpforms-error")
    })

    it("should successfully fill the form and send it", async function () {
        await inHousePage.setName("John Doe").verifyName()
        await inHousePage.setEmail("john.doe@example.com").verifyEmail()
        await inHousePage.setCompany("Acome Corp").verifyCompany()
        await inHousePage.setMessage("Hello, World!").verifyMessage()
        await inHousePage.click("@sendButton")
    })

    after(function (browser, done) {
        browser.end()
        done()
    })
})
