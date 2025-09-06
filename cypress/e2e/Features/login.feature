# Feature: Saucedemo Login Feature
#     # Background is used to define steps that are common for all scenarios
#     Background:
#         Given I open the Saucedemo website
#     # Scenario with a data table for login credentials
#     Scenario: Login with valid credentials
#         When I login with the following credentials:
#             | username      | password     |
#             | standard_user | secret_sauce |
#             | standard      | secret       |
#         Then I should be redirected to the products page

@regression
Feature: Saucedemo Login Feature
  # Background ensures the website is always opened before each scenario
  Background:
    Given I open the Saucedemo website
  # Positive Scenario
  Scenario: Login with valid credentials
    When I login with the following credentials:
      | username       | password     |
      | standard_user  | secret_sauce |
    Then I should be redirected to the products page
@sanity
  # Negative Scenario 1 - Invalid Username
  Scenario: Login with invalid username
    When I login with the following credentials:
      | username       | password     |
      | wrong_user     | secret_sauce |
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"
  # Negative Scenario 2 - Invalid Password
  Scenario: Login with invalid password
    When I login with the following credentials:
      | username       | password     |
      | standard_user  | wrong_pass   |
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"
  # Negative Scenario 3 - Empty Fields
  Scenario: Login with empty fields
    When I login with the following credentials:
      | username | password |
      |          |          |
    Then I should see an error message "Epic sadface: Username is required"
  # Negative Scenario 4 - Username provided, no password
  Scenario: Login with only username
    When I login with the following credentials:
      | username       | password |
      | standard_user  |          |
    Then I should see an error message "Epic sadface: Password is required"
