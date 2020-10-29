Feature: CRM Create Contacts

Scenario Outline: CRM create a new contact 

Given user is already on Login Page
When title of login page is Cogmento CRM
Then user enters "<username>" and user enters "<password>"
Then user clicks on login button
Then user is on Home Page
Then user clicks on Contacts link
Then user clicks on New button
Then user is on AddNewContacts Page
Then user enters "<firstname>", "<lastname>" and "<position>"
Then user clicks on Save button
Then close the browser

Examples:
	| username | password | firstname | lastname | position |
	| sherinethachil@gmail.com | test@123 | sherine | thomas | QA Engineer |
	| sherinethachil@gmail.com | test@123 | merine | thomas | Manager |
	
	
	