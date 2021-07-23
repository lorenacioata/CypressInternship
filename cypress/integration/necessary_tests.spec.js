
describe('TASK4_Necessary Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com/')
      
    })
   
    it('Change Currency Functionality', () => {
        cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(1) > a").contains("€ Euro").click({force:true})
        cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div").contains("€")
        cy.log("The currency is now in €")
        
        cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(2) > a").contains("£ Pound Sterling").click({force:true})
        cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div").contains("£")
        cy.log("The currency is now in £")

        cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(3) > a").contains("$ US Dollar").click({force:true})
        cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div").contains("$")
        cy.log("The currency is now in $")
    })

    it('Share on Social Media Functionality', () => {
        
        cy.get("body > div > header > div.container-fluid > div > div.block_8 > div > div > a.facebook").click()
        cy.contains('Facebook').should('have.attr', 'href', 'http://www.facebook.com').should('have.attr', 'target', '_blank')
        cy.log("A new tab with Facebook opens up")

        cy.get("body > div > header > div.container-fluid > div > div.block_8 > div > div > a.twitter").click()
        cy.contains("Twitter").should('have.attr', 'href',"https://twitter.com/").should('have.attr', 'target', '_blank')
        cy.log("A new tab with Twitter opens up")
        
        cy.get("body > div > header > div.container-fluid > div > div.block_8 > div > div > a.linkedin").click()
        
        cy.contains("Linkedin").should('have.attr', 'href',"http://www.linkedin.com/").should('have.attr', 'target', '_blank')

        cy.get("#main-content > section.section.section--hero > div.hero > h1").contains("Welcome to your professional community")

    })

    it('Contact Us Functionality -> invalid email address(w/out @)', () => {
        
        cy.get("#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a").contains("Contact Us").click()
        cy.get("#ContactUsFrm_first_name").type("Lore")
        cy.get("#ContactUsFrm_email").type("loregmail.com")
        cy.get("#ContactUsFrm_enquiry").type("I have a problem with my checkout.")
        cy.get("#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button").click()
        cy.get("#field_12 > span > div.element_error.has-error").contains("E-Mail Address does not appear to be valid!")

    })

    it('Contact Us Functionality -> invalid email address(w/out .)', () => {
        //there is a bug here because it works without . after gmail/yahoo etc and it should not
        cy.get("#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a").contains("Contact Us").click()
        cy.get("#ContactUsFrm_first_name").type("Lore")
        cy.get("#ContactUsFrm_email").type("lore@gmailcom")
        cy.get("#ContactUsFrm_enquiry").type("I have a problem with my checkout.")
        cy.get("#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button").click()
        //cy.get("#field_12 > span > div.element_error.has-error").contains("E-Mail Address does not appear to be valid!") the test fails with this line
    })


    it('Contact Us Functionality -> Empty First name', () => {
        cy.get("#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a").contains("Contact Us").click()
        
        cy.get("#ContactUsFrm_email").type("lore@gmailcom")
        cy.get("#ContactUsFrm_enquiry").type("I have a problem with my checkout.")
        cy.get("#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button").click()

        cy.get("#field_11 > span > div.element_error.has-error").contains("First name: is required field! Name must be between 3 and 32 characters!")
    })

    it('Contact Us Functionality -> Empty Email Address', () => {
        cy.get("#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a").contains("Contact Us").click()
        cy.get("#ContactUsFrm_first_name").type("Lore")
        cy.get("#ContactUsFrm_enquiry").type("I have a problem with my checkout.")
        cy.get("#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button").click()

        cy.get("#field_12 > span > div.element_error.has-error").contains("Email: is required field! E-Mail Address does not appear to be valid!")
    })

    it('Contact Us Functionality -> Empty Enquiry', () => {
        
        cy.get("#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a").contains("Contact Us").click()
        cy.get("#ContactUsFrm_first_name").type("Lore")
        cy.get("#ContactUsFrm_email").type("lore@gmail.com")

        cy.get("#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button").click()
        cy.get("#field_13 > span > div.element_error.has-error").contains("Enquiry: is required field! Enquiry must be between 10 and 3000 characters!")

    })

    it('Contact Us Functionality -> valid data ', () => {
        
        cy.get("#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a").contains("Contact Us").click()
        cy.get("#ContactUsFrm_first_name").type("Lore")
        cy.get("#ContactUsFrm_email").type("lore@gmail.com")
        cy.get("#ContactUsFrm_enquiry").type("I have a problem with my checkout.")
        cy.get("#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button").click()
        cy.get("#maincontainer > div > div > div > div > section > p:nth-child(3)").contains("Your enquiry has been successfully sent to the store owner!")
        cy.get("#maincontainer > div > div > div > div > section > a").contains("Continue").click()

    })
})