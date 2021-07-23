describe('Unregistered User Functionality', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Search Item Functionality', () => {

    cy.get("#filter_keyword").type("Lancome")
    cy.get("#search_form > div > div > i").click()
    cy.get("#maincontainer > div > div > div > div > h4:nth-child(3)").contains("Products meeting the search criteria")
    cy.get("#maincontainer > div > div > div > div > div:nth-child(4) > form").should("be.visible").contains("Sort By:")

    cy.get("#filter_keyword").type("tp")
    cy.get("#search_form > div > div > i").click()
    cy.get("#maincontainer > div > div > div > div > div:nth-child(4)").should("be.visible").contains("There is no product that matches the search criteria")

    })
    
    it('Add an Item to Cart Functionality', () => {

        cy.get("#categorymenu > nav > ul > li:nth-child(4) > a").click()
        cy.get("#maincontainer > div > div > div > div > ul > li:nth-child(3) > a > img").click()
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > div.pricetag.jumbotron > a > i").click()
        cy.get("body > div > header > div.container-fluid > div > div.block_7 > ul > li > a > span.cart_total").click()
        //cy.get("")
        })
    
    it('Finalize a Purchase Functionality', () => {

        cy.get("#categorymenu > nav > ul > li:nth-child(4) > a").click()
        cy.get("#maincontainer > div > div > div > div > ul > li:nth-child(3) > a > img").click()
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > div.pricetag.jumbotron > a > i").click()
        cy.get("body > div > header > div.container-fluid > div > div.block_7 > ul > li > a > span.cart_total").click()

        cy.get("#cart_checkout1").should("be.visible").contains("Checkout").click()

        cy.get("#accountFrm_accountguest").check()
        cy.get("#accountFrm > fieldset > button").click()

        cy.get("#guestFrm_firstname").type("John")
        cy.get("#guestFrm_lastname").type("Guest")
        cy.get("#guestFrm_email").type("johhnytheguest@yahoo.com")
        cy.get("#guestFrm_telephone").type("1234123412")
        cy.get("#guestFrm_fax").type("3456345678")

        cy.get("#guestFrm_company").type("Guest Company")
        cy.get("#guestFrm_address_1").type("Guest Street 18")
        cy.get("#guestFrm_city").type("Bucuresti")
        cy.get("#guestFrm_postcode").type("111222")
        
        cy.get("#guestFrm_country_id").select("Romania").should("have.value","175")
        cy.get("#guestFrm_zone_id").select("Bucuresti").should("have.value","2688")

        cy.get("#guestFrm > div.form-group > div > button > i").click()
        cy.get("#checkout_btn").click()
     })

     let text
     let orderID
     let email
    it('Checking the Order Status Functionality', () => {
        cy.get("#topnav > select").select("Check Your Order")
        cy.get("#CheckOrderFrm_order_id").type("1549")
        cy.get("#CheckOrderFrm_email").type("johhnytheguest@yahoo.com")
        cy.get("#CheckOrderFrm > div > fieldset > div:nth-child(3) > div > button").click()

        cy.get("#maincontainer > div > div > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1) > b:nth-child(5)")
          .invoke("text").then((text)=> {
            orderID=text.substring(text.indexOf("Order ID") + "Order ID".length, text.indexOf("Status")).trim().split("#")[1];
            email=text.substring(text.indexOf("E-Mail") + "E-Mail".length, text.indexOf("Telephone")).trim();
          })
        
        cy.get("#maincontainer > div > div > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)").should("be.visible").contains("Pending")
        cy.log("Pending")
        })

        let pricetag 
     it('Brand Selection and Sorting Functionality', () => {
        cy.get("#brandcarousal").should("be.visible")
        cy.get("#brandcarousal > li:nth-child(1) > div.image > a > img").click()
        cy.get("#sort").select("Price Low > High").should("have.value","p.price-ASC")

        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a").should("be.visible")
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a").should("be.visible")
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a").should("be.visible")
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a").should("be.visible")
        cy.log("There exists 4 elements")

        const prices=[]
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div.pricenew").invoke("text").then(($pricetag)=>{
            prices.push($pricetag.substring($pricetag.indexOf("$")+"$".length,$pricetag.length))
        })
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.thumbnail > div.pricetag.jumbotron > div > div").invoke("text").then(($pricetag)=>{
            prices.push($pricetag.substring($pricetag.indexOf("$")+"$".length,$pricetag.length))
        })
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > div.pricetag.jumbotron > div > div").invoke("text").then(($pricetag)=>{
            prices.push($pricetag.substring($pricetag.indexOf("$")+"$".length,$pricetag.length))
        })
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(4) > div.thumbnail > div.pricetag.jumbotron > div > div").invoke("text").then(($pricetag)=>{
            prices.push($pricetag.substring($pricetag.indexOf("$")+"$".length,$pricetag.length))
        })

        cy.wrap(prices).then((Result)=>{cy.log(Result)
        let i
        let ok=0
        for(i=0;i<Result.lenght-1;i++)
            if(Number(Result[i])>Number(Result[i+1]))
                ok=1
            cy.log("0 means products are ordered correctly")
            cy.log("1 means products are not ordered correctly")
            cy.log(ok)
        })
     })

     it('Out of Stock Functionality', () => {

        cy.get("#brandcarousal").should("be.visible")
        cy.get("#brandcarousal > li:nth-child(1) > div.image > a > img").click()
        cy.get("#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > a > img").click()
        cy.get("#product > fieldset > div:nth-child(4) > ul > li > span").contains("Out of Stock")
        cy.log("The out of Stock Items can't be added in cart")
    })
    
  })
  