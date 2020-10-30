Feature: CRM Deal Data Creation

Scenario: CRM create a new deal 

Given user is already on Login Page
When title of login page is Cogmento CRM
Then user enters username and user enters password
| sherinethachil@gmail.com | test@123 |
Then user clicks on login button
Then user is on Home Page
Then user clicks on Deals link
Then user clicks on New button
Then user is on AddNewDeals Page
Then user enters deal details
| test deal | 1000 | 50 | 10 |
Then user clicks on Save button
Then close the browser

