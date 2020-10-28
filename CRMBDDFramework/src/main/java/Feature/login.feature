Feature: CRM Login Feature

Scenario: CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Cogmento CRM
Then user enters username and user enters password
Then user clicks on login button
Then user is on Home Page
Then close the browser
