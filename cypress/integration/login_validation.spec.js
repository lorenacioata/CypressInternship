
describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with valid login name and invalid password', () => {
   
    cy.get("#customer_menu_top > li > a").click()
    cy.get("#loginFrm_loginname").should('have.class','form-control').type("janedoe2")
    cy.get("#loginFrm_password").should('have.class','form-control').type("testfake")
    cy.get("#loginFrm > fieldset > button").click()

    cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Error: Incorrect login or password provided.")

    
  })

  it('Login with invalid login name and invalid password', () => {
   
      cy.get("#customer_menu_top > li > a").click()
      cy.get("#loginFrm_loginname").should('have.class','form-control').type("testfake")
      cy.get("#loginFrm_password").should('have.class','form-control').type("testfake")
      cy.get("#loginFrm > fieldset > button").click()

      cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Error: Incorrect login or password provided.")

      
    })

    it('Login with empty fields', () => {
   
      cy.get("#customer_menu_top > li > a").click()
      cy.get("#loginFrm > fieldset > button").click()

      cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Error: Incorrect login or password provided.")

      
    })

    it('Login with valid data', () => {
   
      cy.get("#customer_menu_top > li > a").click()
      cy.get("#loginFrm_loginname").should('have.class','form-control').type("janedoe2")
      cy.get("#loginFrm_password").should('have.class','form-control').type("testinternship")
      cy.get("#loginFrm > fieldset > button").click()
      
    })
})
