//const { it } = require("mocha")


describe('TASK2_Registered_Customers', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get("#customer_menu_top > li > a").click()
      cy.get("#loginFrm_loginname").should('have.class','form-control').type("janedoe2")
      cy.get("#loginFrm_password").should('have.class','form-control').type("testinternship")
      cy.get("#loginFrm > fieldset > button").click()
    })
   
    it.skip('Account Details Update', () => {
    
    cy.get("#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(3) > a").click()
    
    cy.get("#AccountFrm_firstname").type('{selectall}{backspace}')
    cy.get("#AccountFrm_firstname").should("have.class","form-control").type("Jenny")

    cy.get("#AccountFrm_lastname").type('{selectall}{backspace}')
    cy.get("#AccountFrm_lastname").should("have.class","form-control").type("Doll")

    cy.get("#AccountFrm_email").type('{selectall}{backspace}')
    cy.get("#AccountFrm_email").should("have.class","form-control").type("jennydoll@test.ro")
    
    cy.get("#AccountFrm_telephone").type('{selectall}{backspace}')
    cy.get("#AccountFrm_telephone").should("have.class","form-control").type("333097456")

    cy.get("#AccountFrm_fax").type('{selectall}{backspace}')
    cy.get("#AccountFrm_fax").should("have.class","form-control").type("444097456")
    
    cy.get("#AccountFrm > div.form-group > div > button").click()

    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.alert.alert-success").contains("Success: Your account has been successfully updated")
    
  })
    
  it.skip('Address Book Update', () => {
    
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > ul > li:nth-child(3) > a > i").click()
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div.col-md-12.col-xs-12.pull-right.mt20.mb20 > a.btn.btn-orange.pull-right").click()
   
    cy.get("#AddressFrm_firstname").should('have.class', 'form-control').type("Jane")
    cy.get("#AddressFrm_lastname").should('have.class', 'form-control').type("Doe")
  
    cy.get("#AddressFrm_company").should('have.class','form-control').type("Intern Test SRL")
    cy.get("#AddressFrm_address_1").should('have.class','form-control').type("Str New Street")
    cy.get("#AddressFrm_address_2").should('have.class','form-control').type("Different Street 3")
    
    cy.get("#AddressFrm_city").should('have.class','form-control').type("Suceava")
    cy.get("#AddressFrm_postcode").should('have.class','form-control').type("111222")
    cy.get("#AddressFrm_country_id").select("Romania").should("have.value","175")
    cy.get("#AddressFrm_zone_id").select("Suceava").should("have.value","2714")
    
    cy.get("#AddressFrm_default1").should("have.value","1").type("radio")

    cy.get("#AddressFrm > div > fieldset > div:nth-child(11) > div > button").click()
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.alert.alert-success").contains("Your address has been successfully inserted")
    
  })

  it.skip('Old Address Book Delete', () => {
    
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > ul > li:nth-child(3) > a > i").click()
    cy.get("button.btn.btn-default").contains("Delete").click()
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.alert.alert-success").contains("Your address has been successfully deleted")
  
  })
    
  it.skip("Wishlist Functionality", () => {
    
    cy.get("#categorymenu > nav > ul > li:nth-child(2) > a").click()
    cy.get("#maincontainer > div > div > div > div > ul > li:nth-child(2) > a > img").click()
    cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(4) > div.thumbnail > a > img").click()
    cy.get("#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large").click({force:true})

    cy.get("#categorymenu > nav > ul > li:nth-child(4) > a").click()
    cy.get("#maincontainer > div > div > div > div > ul > li:nth-child(5) > a > img").click()
    
    cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div > div.thumbnail > a > img").click()
    cy.get("#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large").click({force:true})

    cy.get("#customer_menu_top > li > ul > li:nth-child(2) > a").click({force:true})
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_67 > td:nth-child(6) > a.btn.btn-sm.btn-default.btn-remove").click()

  })

  let Address1
  let Address2
  it.skip("Purchase Items Functionality",()=>{
    
    cy.get("#categorymenu > nav > ul > li:nth-child(3) > a").click()
    cy.get("#maincontainer > div > div > div > div > ul > li:nth-child(1) > a > img").click()
    cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i").click()
    
    cy.get("#categorymenu > nav > ul > li:nth-child(7) > a").click()
    cy.get("#maincontainer > div > div > div > div > ul > li:nth-child(1) > a > img").click()
    cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(4) > div.thumbnail > div.pricetag.jumbotron > a > i").click()

    cy.get("#categorymenu > nav > ul > li:nth-child(5) > a").click()
    cy.get("#maincontainer > div > div > div > div > ul > li:nth-child(2) > a > img").click()
    cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(7) > div.thumbnail > div.pricetag.jumbotron > a > i").click()

    cy.get("#categorymenu > nav > ul > li:nth-child(6) > a").click()
    cy.get("#maincontainer > div > div > div > div > ul > li:nth-child(2) > a > img").click()
    cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > div.pricetag.jumbotron > a > i").click()

    cy.get("body > div > header > div.container-fluid > div > div.block_7 > ul > li > a > span.cart_total").click()
    cy.get("#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(7) > a > i").click()
    cy.get("#cart_quantity73").type('{selectall}{backspace}')
    cy.get("#cart_quantity73").type("2")
    cy.get("#cart_update").click()

    cy.get("#cart_checkout1").should("be.visible").contains("Checkout").click()
    
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.contentpanel > table.table.confirm_shippment_options > tbody > tr > td:nth-child(2) > address")
      .invoke("text").then((Address1)=>{
      })

    cy.get("#customer_menu_top > li > ul > li:nth-child(5) > a").click({force:true})
  
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div.genericbox.border-bottom > table > tbody > tr > td:nth-child(1) > address")
      .invoke("text").then((Address2)=>{
      })
      
      if(Address1==Address2)
        cy.log("The Address in Checkout is the Default one")
      else
        cy.log("The Address in Checkout is not the Default one")

    })
    
    let text
    let orderID
    let email
    it("Check order status",()=>{
    
    cy.get("#customer_menu_top > li > ul > li:nth-child(6) > a").click({force:true})
    cy.get("#button_edit").click()
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)")
      .invoke("text").then((text)=> {
        orderID=text.substring(text.indexOf("Order ID") + "Order ID".length, text.indexOf("Status")).trim().split("#")[1];
        email=text.substring(text.indexOf("E-Mail") + "E-Mail".length, text.indexOf("Telephone")).trim();

      })
    
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)").should("be.visible").contains("Pending")
    cy.log("Pending")
    })
    
  })
  