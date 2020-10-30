Feature: CRM App test

@First
Scenario: CRM create contact test

Given user is on contacts page
When user fills the contact form
Then contact is created

@Second
Scenario: CRM create deal test

Given user is on deals page
When user fills the deals form
Then deal is created

@Third
Scenario: CRM create case test

Given user is on case page
When user fills the case form
Then case is created