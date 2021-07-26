import { Login, Register } from "../support/POM/POM.spec.js"

describe('Register POM Functionality', () => {
    beforeEach(() => {
      Login.visit_page()
    })
  
    it('Register POM', () => {
      Login.Login_or_Register().click()
      Register.Continue1().contains("Continue").click()
      
      Register.First_Name().type("Jane")
      Register.Last_Name().type("Doe")
      Register.Email().type("jane.doe222357@gmail.com")
      Register.Telephone().type('0712312312')
      Register.Fax().type('0712345678')
      
      Register.Company().type("Intern Test SRL")
      Register.Address1().type("Str SpartanSoft nr 999")
      Register.Address2().type("Str Home 10000")
      Register.City().type("Suceava")
      Register.PostCode().type("111222")
      
      Register.Country().select("Romania").should("have.value","175")
      Register.Zone().select("Suceava").should("have.value","2714")
      
      Register.Login_Name().type("janedoe222357")
      Register.Password().type("testinternship")
      Register.ConfirmPassword().type("testinternship")
      
      Register.NewsLetter().should("have.value","1").type("radio")
  
      Register.Agree_Privacy().should("have.value",'1').type("check")
  
      Register.Continue2().contains("Continue").click()
  
      Register.Succesfully_Created().contains("YOUR ACCOUNT HAS BEEN CREATED!")
      
      Register.Continue3().contains("Continue").click()
  
    })
  
  })
  