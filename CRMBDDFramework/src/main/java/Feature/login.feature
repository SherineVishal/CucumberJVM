Feature: CRM Login Feature

# without examples keyword
#Scenario: CRM Login Test Scenario
#
#Given user is already on Login Page
#When title of login page is Cogmento CRM
#Then user enters "sherinethachil@gmail.com" and user enters "test@123"
#Then user clicks on login button
#Then user is on Home Page
#Then close the browser

# with examples keyword
Scenario Outline: CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Cogmento CRM
Then user enters "<username>" and user enters "<password>"
Then user clicks on login button
Then user is on Home Page
Then close the browser

Examples:
	| username | password | 
	| sherinethachil@gmail.com | test@123 | 
	| merinethachil@gmail.com | test@456 |


