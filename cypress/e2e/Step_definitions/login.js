// // Import the Given, When, Then functions from Cucumber
// import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// // Import the LoginPage object
// import LoginPage from "../Pages/LoginPage";

// // Step: Open the website
// Given("I open the Saucedemo website", () => {
//   // Visit the url
//   cy.visit("https://www.saucedemo.com/");
// });

// // Step: Login with credentials (using data table from feature file)
// When("I login with the following credentials:", (dataTable) => {
//   // Convert dataTable into an object { username, password }
//   const data = dataTable.rowsHash();

//   // Enter username
//   LoginPage.enterUsername(data.username);

//   // Enter password
//   LoginPage.enterPassword(data.password);

//   // Click login button
//   LoginPage.clickLoginButton();
// });

// // Step: Verify successful login
// Then("I should be redirected to the products page", () => {
//   // Check that the URL contains 'inventory.html' which indicates success
//   cy.url().should("include", "/inventory.html");
// });

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../Pages/LoginPage";

// Step: Open the website
Given("I open the Saucedemo website", () => {
  cy.visit("https://www.saucedemo.com/");
});

// Step: Login with credentials from data table
When("I login with the following credentials:", (dataTable) => {
  const data = dataTable.rowsHash();

  // Type username
  LoginPage.enterUsername(data.username);

  // Type password
  LoginPage.enterPassword(data.password);

  // Click login
  LoginPage.clickLoginButton();
});

// Step: Verify successful login
Then("I should be redirected to the products page", () => {
  // Check that the URL contains 'inventory.html' which indicates success
  cy.url().should("include", "/inventory.html");
});

// Step: Error message validation for negative scenarios
Then("I should see an error message {string}", (expectedError) => {
  LoginPage.verifyErrorMessage(expectedError);
});

