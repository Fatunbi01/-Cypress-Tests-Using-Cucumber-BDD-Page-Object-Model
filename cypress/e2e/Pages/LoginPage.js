// // Define the LoginPage class to manage locators & actions
// class LoginPage {
//   // Unique locator for username input field
//   static usernameField = "#user-name";

//   // Unique locator for password input field
//   static passwordField = "#password";

//   // Unique locator for login button
//   static loginButton = "#login-button";

//   // Method to type username
//   static enterUsername(username) {
//     cy.get(this.usernameField).type("standard_user");
//   }

//   // Method to type password
//   static enterPassword(password) {
//     cy.get(this.passwordField).type("secret_sauce");
//   }

//   // Method to click login button
//   static clickLoginButton() {
//     cy.get(this.loginButton).click();
//   }
// }

// // Export the class so it can be used in steps
// export default LoginPage;

class LoginPage {
  // Locators
  static usernameField = "#user-name";
  static passwordField = "#password";
  static loginButton = "#login-button";
  static errorMessage = "[data-test='error']"; // unique locator for error messages

  // Enter username
  static enterUsername(username) {
    cy.get(this.usernameField).type("standard_user");
  }

  // Enter password
  static enterPassword(password) {
    cy.get(this.passwordField).type("secret_sauce");
  }

  // Click login button
  static clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  // Verify error message
  static verifyErrorMessage(expectedText) {
    cy.get(this.errorMessage).should("have.text", expectedText);
  }
}

export default LoginPage;
