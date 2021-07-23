import {Login} from "./POM.spec.js"

describe('Login POM Functionality', () => {
    beforeEach(() => {
        Login.visit_page();
    })
  
    it('Login with valid data POM', () => {
     
      Login.Login_or_Register().click();
      Login.LoginName().type("janedoe2");
      Login.Password().type("testinternship");
      Login.LoginBtn().click()
      Login.Welcomebtn().should("be.visible").contains("Welcome back Jenny")
  
  })
})

