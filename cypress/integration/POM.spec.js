export class Login{
    static visit_page()
    {
        return cy.visit('/');
    }
    static Login_or_Register()
    {
        return cy.get("#customer_menu_top>li>a");
    }
    static LoginName()
    {
        return cy.get("#loginFrm_loginname");
    }
    static Password()
    {
        return cy.get("#loginFrm_password");
    }
    static LoginBtn()
    {
        return cy.get("#loginFrm > fieldset > button")
    }
    static Welcomebtn()
    {
        return cy.get("#customer_menu_top > li > a > div")
    }
}

export class Register
{
    static Continue1()
    {
        return cy.get("#accountFrm > fieldset > button")
    }
    static First_Name()
    {
        return cy.get("#AccountFrm_firstname")
    }
    static Last_Name()
    {
        return cy.get("#AccountFrm_lastname")
    }
    static Email()
    {
        return cy.get("#AccountFrm_email")
    }
    static Telephone()
    {
        return cy.get("#AccountFrm_telephone")
    }
    static Fax()
    {
        return cy.get("#AccountFrm_fax")
    }
    static Company()
    {
        return cy.get("#AccountFrm_company")
    }
    static Address1()
    {
        return cy.get("#AccountFrm_address_1")
    }
    static Address2()
    {
        return cy.get("#AccountFrm_address_2")
    }
    static City()
    {
        return cy.get("#AccountFrm_city")
    }
    static PostCode()
    {
        return cy.get("#AccountFrm_postcode")
    }
    static Country()
    {
        return cy.get("#AccountFrm_country_id")
    }
    static Zone()
    {
        return cy.get("#AccountFrm_zone_id")
    }
    static Login_Name()
    {
        return cy.get("#AccountFrm_loginname")
    }
    static Password()
    {
        return cy.get("#AccountFrm_password")
    }
    static ConfirmPassword()
    {
        return cy.get("#AccountFrm_confirm")
    }
    static NewsLetter()
    {
        return cy.get("#AccountFrm_newsletter1")
    }
    static Agree_Privacy()
    {
        return cy.get("#AccountFrm_agree")
    }
    static Continue2()
    {
        return cy.get("#AccountFrm > div.form-group > div > div > button")
    }
    static Succesfully_Created()
    {
        return  cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > h1 > span.maintext")
    }
    static Continue3()
    {
        return cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a")
    }
}