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

export class My_Tests{
    static EuroBtn()
    {
        return cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(1) > a")
    }
    static PoundBtn()
    {
        return cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(2) > a")
    }
    static DollarBtn()
    {
        return cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(3) > a")
    }
    static ShowEuro() 
    {
        return cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div") 
    }
    static ShowPound()
    {
        return cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div")
    }
    static ShowDollar()
    {
        return cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div")
    }
    static Share_FB()
    {
        return cy.get("body > div > header > div.container-fluid > div > div.block_8 > div > div > a.facebook")
    }
    static Share_Twitter()
    {
        return cy.get("body > div > header > div.container-fluid > div > div.block_8 > div > div > a.twitter")
    }
    static ContactUsBtn()
    {
        return cy.get("#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a")
    }
    static ContactUs_FstName()
    {
        return cy.get("#ContactUsFrm_first_name")
    }
    static ContactUs_Email()
    {
        return cy.get("#ContactUsFrm_email")
    }
    static ContactUs_Enquiry()
    {
        return cy.get("#ContactUsFrm_enquiry")
    }
    static ContactUs_Send()
    {
        return cy.get("#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button")
    }
    static ContactUs_Error_Email()
    {
        return cy.get("#field_12 > span > div.element_error.has-error")
    }
    static ContactUs_Error_FstName()
    {
        return cy.get("#field_11 > span > div.element_error.has-error")
    }
    static ContactUs_Error_Enquiry()
    {
        return cy.get("#field_13 > span > div.element_error.has-error")
    }
    static ContactUs_Successful()
    {
        return  cy.get("#maincontainer > div > div > div > div > section > p:nth-child(3)")
    }
    static ContactUs_Continue()
    {
        return cy.get("#maincontainer > div > div > div > div > section > a")
    }
}