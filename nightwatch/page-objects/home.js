module.exports = {
    url: "https://inhouse.decemberlabs.com/",
    elements: {
        getInTouchLink: 'a[href="#"]',
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
            setName(name) {
                return this.setValue("@nameInput", name).execute(function () {
                    document.querySelector("#wpforms-872-field_0").blur()
                })
            },

            setEmail(email) {
                return this.setValue("@emailInput", email)
            },

            setCompany(company) {
                return this.setValue("@companyNameInput", company).keys(this.api.Keys.TAB)
            },

            setMessage(message) {
                return this.setValue("@messageInput", message).keys(this.api.Keys.TAB)
            },

            verifyName() {
                return this.waitForElementVisible("@nameValid", 5000)
            },

            verifyEmail() {
                return this.waitForElementVisible("@emailValid", 5000)
            },

            verifyCompany() {
                return this.waitForElementVisible("@companyNameValid", 5000)
            },

            verifyMessage() {
                return this.waitForElementVisible("@messageValid", 5000)
            }
        }
    ]
}
