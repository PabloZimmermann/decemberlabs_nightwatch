module.exports = {
    url: "https://inhouse.decemberlabs.com/",
    elements: {
        getInTouchLink: 'a[href="#"]', // you can also use xpath here "//a[text()='Get in touch']"
        modal: ".dl-modal.dl-getintouch-modal.big.open",
        modalTitle: ".contact-form-heading.center",
        sendButton: 'button[name="wpforms[submit]"]',
        nameInput: "#wpforms-872-field_0",
        emailInput: "#wpforms-872-field_1",
        companyNameInput: "#wpforms-872-field_6",
        messageInput: "#wpforms-872-field_2",
        nameValid: "#wpforms-872-field_0.wpforms-valid",
        emailValid: "#wpforms-872-field_1.wpforms-valid",
        companyNameValid: "#wpforms-872-field_6.wpforms-valid",
        messageValid: "#wpforms-872-field_2.wpforms-valid"
    },
    commands: [
        {
            prepareTest() {
                return this.navigate().resizeWindow(1440, 900).click("@getInTouchLink")
            },

            verifyModalIsOpen() {
                return this.expect
                    .element("@modal")
                    .to.be.visible.expect.element("@modalTitle")
                    .text.to.equal("Get In Touch")
            },

            clickSendButton() {
                return this.click("@sendButton")
            },

            verifyInputsErrorsAreDisplayed() {
                return this.inputCSSError("@nameInput")
                    .inputCSSError("@emailInput")
                    .inputCSSError("@companyNameInput")
                    .inputCSSError("@messageInput")
            },

            inputCSSError(selector) {
                return this.expect
                    .element(selector)
                    .to.have.attribute("class")
                    .which.contains("wpforms-error")
            },

            setName(name) {
                return this.setValue("@nameInput", name).sendKeys("@emailInput", this.api.Keys.TAB)
            },

            setEmail(email) {
                return this.setValue("@emailInput", email).sendKeys(
                    "@emailInput",
                    this.api.Keys.TAB
                )
            },

            setCompany(company) {
                return this.setValue("@companyNameInput", company).sendKeys(
                    "@companyNameInput",
                    this.api.Keys.TAB
                )
            },

            setMessage(message) {
                return this.setValue("@messageInput", message).sendKeys(
                    "@messageInput",
                    this.api.Keys.TAB
                )
            },

            verifyValidName() {
                return this.waitForElementVisible("@nameValid", 5000)
            },

            verifyValidEmail() {
                return this.waitForElementVisible("@emailValid", 5000)
            },

            verifyValidCompany() {
                return this.waitForElementVisible("@companyNameValid", 5000)
            },

            verifyValidMessage() {
                return this.waitForElementVisible("@messageValid", 5000)
            }
        }
    ]
}
