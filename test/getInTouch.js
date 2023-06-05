describe("Test Get In Touch Form", function () {
    let home

    const testData = {
        validName: "Johny Doe",
        validEmail: "jdoe@yopmail.com",
        validCompany: "J Corp",
        validMessage: "Hello, my name is john!"
    }

    before(function (browser, done) {
        home = browser.page.home()
        done()
    })

    beforeEach(async function (browser, done) {
        await home.prepareTest()
        done()
    })

    it("should open the modal when 'Get In Touch' link is clicked", async function () {
        await home.verifyModalIsOpen()
    })

    it("should show input errors when send button is clicked without filling required inputs", async function () {
        await home.clickSendButton().verifyInputsErrorsAreDisplayed()
    })

    it("should successfully fill the form and send it", async function () {
        await home.setName(testData.validName).verifyValidName()
        await home.setEmail(testData.validEmail).verifyValidEmail()
        await home.setCompany(testData.validCompany).verifyValidCompany()
        await home.setMessage(testData.validMessage).verifyValidMessage()
        await home.clickSendButton()
    })

    after(function (browser, done) {
        browser.end()
        done()
    })
})
