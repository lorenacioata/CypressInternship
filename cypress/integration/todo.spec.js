
describe('Register Functionality', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it.skip('Register', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get("#customer_menu_top > li > a").click()
    cy.get("#accountFrm > fieldset > button").contains("Continue").click()
    
    cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
    cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
    cy.get("#AccountFrm_email").should('have.class', 'form-control').type("jane.doe2@gmail.com")
    cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
    cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
    
    cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
    cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
    cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
    cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
    cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
    cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
    cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
    
    cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe2")
    cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
    cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")

    cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")

    cy.get("#AccountFrm_agree").should("have.value",'1').type("check")

    cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()

    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()

  })

  it.skip('Login', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get("#customer_menu_top > li > a").click()
    cy.get("#loginFrm_loginname").should('have.class','form-control').type("janedoe2")
    cy.get("#loginFrm_password").should('have.class','form-control').type("testinternship")
    cy.get("#loginFrm > fieldset > button").click()
  })

it.only('Validate_Register', () => {
    cy.get("#customer_menu_top > li > a").click()
    cy.get("#accountFrm > fieldset > button").contains("Continue").click()
    
    cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type(" ")
    cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
    cy.get("#AccountFrm_email").should('have.class', 'form-control').type("jane.doe2@gmail.com")
    cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
    cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
    
    cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
    cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
    cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
    cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
    cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
    cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
    cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
    
    cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe2")
    cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
    cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")

    cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")

    cy.get("#AccountFrm_agree").should("have.value",'1').type("check")

    cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()

    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()

  })

})
