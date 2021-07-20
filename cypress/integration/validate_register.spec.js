
describe('Register Validation', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com/')
      cy.url().should("include","https://automationteststore.com/")
    })
    it('First Name Must Be Greater than 1', () => {
      cy.get("#customer_menu_top > li > a").click()
      cy.get("#accountFrm > fieldset > button").contains("Continue").click()
      
      cy.get("#AccountFrm_firstname").its("length").should('not.be.gt',1)
      
      cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type(" ")
      cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
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

      cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("First Name must be between 1 and 32 characters!")
    })
  
    it('First Name must be less than 32', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").its("length").should("be.lt",32)
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type(" ")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
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
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("First Name must be between 1 and 32 characters!")
      })

    it('Last Name Must Be Greater than 1', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type(" ")
        
        cy.get("#AccountFrm_lastname").its("length").should('not.be.gt',1)

        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
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
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Last Name must be between 1 and 32 characters!")
      })

    it('Last Name must be less than 32 characters', () => {
        
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("JLO")
        
        cy.get("#AccountFrm_lastname").its("length").should("be.lt",32)
        
        
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
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
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Last Name must be between 1 and 32 characters!")
      })

    it('Email Address must be valid (@)', () => {
        
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jennifer")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Lopez")
        
        
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janeedoe2gmail.com")


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
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Email Address does not appear to be valid!")
      })

    it('Email Address must be valid (have .com/ .ro etc)', () => {
        
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jennifer")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Lopez")
        
        
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janeedoe2@gmailcom")


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
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Email Address does not appear to be valid!")
      })

    it('Email Address must not be registered', () => {
        
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jennifer")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Lopez")
        
        
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
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Error: E-Mail Address is already registered!")
      })

    it('Email Address must not be empty', () => {
        
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jennifer")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Lopez")
        
        
        //cy.get("#AccountFrm_email").should('have.class', 'form-control').type("jane.doe2@gmail.com")

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
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Email Address does not appear to be valid!")
      })

    it('Telephone number is not mandatory', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        //cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
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
      })

    it('Telephone Number must have only numbers', () => {
        
        //bug-> can write ASCII as Telephone number

        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jennifer")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Lopez")
        
        
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")

        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('123dfg532')
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
  
        //cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Email Address does not appear to be valid!")
      })

    it('Fax number is not mandatory', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        //cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
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
      })

    it('Fax Number must have only numbers', () => {
        
        //bug-> can write ASCII as FAX number

        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jennifer")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Lopez")
        
        
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")

        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('123dfg532')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345gds78')
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
  
        //cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Email Address does not appear to be valid!")
      })

    it('Company Name is not mandatory', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        //cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
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
      })

    it('Address1 Must Be Greater than 3', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type(" ")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type(" ")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').its("length").should('not.be.gt',1)
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
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Address 1 must be between 3 and 128 characters!")
      })
    
    it('Address1 must be less than 128', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type(" ")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type(" ")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').its("length").should('be.lt',128)
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
    
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Address 1 must be between 3 and 128 characters!")
        })
  
    it('Address2 is not mandatory', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type(" ")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type(" ")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str. SpartanSoft nr 999")
        //cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
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
  
      })
        
    it('Must Select a Country', () => {
       
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")

        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("FALSE")
        
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe2")
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Please select a country!")
       
    
      })

    it('Must Select a Region/State', () => {
       
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")

        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("FALSE")
        
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe2")
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Please select a region / state!")
      })
      
    it('Zip/Postal code must be less than 10', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type(" ")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type(" ")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").its("length").should("be.lt",10)
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe2")
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Zip/postal code must be between 3 and 10 characters!")
      })

    it('Zip/Postal code Must Be Greater than 3', () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type(" ")
        
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type(" ")

        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").its("length").should('not.be.gt',3)
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe2")
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
  
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Zip/postal code must be between 3 and 10 characters!")
    
    })

    it("Login Name Must Be Less than 64 alphanumerical characters", () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        
        cy.get("#AccountFrm_loginname").its("length").should('be.lt',64)
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
    
        //cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()
        
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Login name must be alphanumeric only and between 5 and 64 characters!")
      })
    
      it("Login Name Must Be Greater than 3 alphanumerical characters", () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        
        cy.get("#AccountFrm_loginname").its("length").should('not.be.gt',3)
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
    
        //cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()
        
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Login name must be alphanumeric only and between 5 and 64 characters!")
      })

      it("Login Name Must Not be registered", () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
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
    
        //cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()
        
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("This login name is not available. Try different login name!")
        
      })

      it("Password Must Be Less than 20 characters", () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe22")
        cy.get("#AccountFrm_password").its("length").should('be.lt',20)
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
    
        //cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()
        
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Password must be between 4 and 20 characters!")
      })
    
      it("Password Must Be Greater than 4 characters", () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe22")
        cy.get("#AccountFrm_password").its("length").should('not.be.gt',4)
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
    
        //cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()
        
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Password must be between 4 and 20 characters!")
      })

      it("Password Confirm Must Be Same as Password", () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe22")
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship2")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
    
        //cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()
        
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Password confirmation does not match password!")
        
      })

      it("No Subscribe Radiobutton checked", () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe22")
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship2")
    
        cy.get("#AccountFrm_newsletter1").should("not.have.value").type("radio")
    
        cy.get("#AccountFrm_agree").should("have.value",'1').type("check")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
    
        //cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a").contains("Continue").click()
        
      })

      it("Agree to the Privacy Policy unchecked!", () => {
        cy.get("#customer_menu_top > li > a").click()
        cy.get("#accountFrm > fieldset > button").contains("Continue").click()
        
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type("Jane")
        cy.get("#AccountFrm_lastname").should('have.class', 'form-control').type("Doe")
        cy.get("#AccountFrm_email").should('have.class', 'form-control').type("janee.doe2@gmail.com")
        cy.get("#AccountFrm_telephone").should('have.class','form-control').type('0712312312')
        cy.get("#AccountFrm_fax").should('have.class','form-control').type('0712345678')
        
        cy.get("#AccountFrm_company").should('have.class','form-control').type("Intern Test SRL")
        cy.get("#AccountFrm_address_1").should('have.class','form-control').type("Str SpartanSoft nr 999")
        cy.get("#AccountFrm_address_2").should('have.class','form-control').type("Str Home 10000")
        cy.get("#AccountFrm_city").should('have.class','form-control').type("Suceava")
        cy.get("#AccountFrm_postcode").should('have.class','form-control').type("111222")
        cy.get("#AccountFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#AccountFrm_zone_id").select("Suceava").should("have.value","2714")
        
        cy.get("#AccountFrm_loginname").should('have.class','form-control').type("janedoe22")
        cy.get("#AccountFrm_password").should('have.class','form-control').type("testinternship")
        cy.get("#AccountFrm_confirm").should('have.class','form-control').type("testinternship2")
    
        cy.get("#AccountFrm_newsletter1").should("have.value","1").type("radio")
    
        cy.get("#AccountFrm > div.form-group > div > div > button").contains("Continue").click()
        
        cy.get("#maincontainer > div > div > div > div.alert.alert-error.alert-danger").should("be.visible").contains("Error: You must agree to the Privacy Policy!")
        
      })
  })
  
  