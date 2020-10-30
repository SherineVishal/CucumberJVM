Feature: CRM Deal Data Creation 

Scenario: CRM create a new deal 

	Given user is already on Login Page 
	When title of login page is Cogmento CRM 
	Then user enters username and user enters password 
		| username | password |
		| sherinethachil@gmail.com | test@123 |
		
	Then user clicks on login button 
	Then user is on Home Page 
	Then user clicks on Deals link 
	Then user clicks on New button 
	Then user is on AddNewDeals Page 
	Then user enters deal details 
		| title | amount | probability | commission |
		| test deal1 | 1000 | 50 | 10 |
		| test deal2 | 2000 | 60 | 20 |
		| test deal3 | 3000 | 70 | 30 |

	Then close the browser