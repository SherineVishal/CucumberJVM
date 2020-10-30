@FunctionalTest
Feature: CRM application testing

@SmokeTest @RegressionTest
Scenario: Login with correct username and password
Given This is a valid login test

@RegressionTest
Scenario: Login with incorrect username and password
Given This is a invalid login test

@SmokeTest
Scenario: Create a contact
Given This is a contact testcase

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is a deal testcase

@RegressionTest
Scenario: Create a task
Given This is a task testcase

@SmokeTest
Scenario: Create a case
Given This is a case testcase

@SmokeTest
Scenario: Verify left panel link
Given clicking on left panel link

@SmokeTest
Scenario: Search a deal
Given This is a search deal test

@SmokeTest @RegressionTest
Scenario: Search a contact
Given This is a search contact test

@SmokeTest @End2End
Scenario: Search a case
Given This is a search case test

@SmokeTest @RegressionTest
Scenario: Search a task
Given This is a search task test

@SmokeTest @RegressionTest
Scenario: Search a call
Given This is a search call test

@SmokeTest @RegressionTest
Scenario: Search an email
Given This is a search an email test

@SmokeTest @RegressionTest
Scenario: Search docs
Given This is a search docs test

@SmokeTest @RegressionTest
Scenario: Search forms
Given This is a search forms test

@SmokeTest @RegressionTest
Scenario: validate a report
Given This is a report test

@SmokeTest @End2End @Regression
Scenario: Application logout
Given This is a logout test