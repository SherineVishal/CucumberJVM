$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sheri/git/CucumberJVM/CRMBDDFramework/src/main/java/Feature/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Create Contacts",
  "description": "",
  "id": "crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "CRM create a new contact",
  "description": "",
  "id": "crm-create-contacts;crm-create-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and user enters \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on AddNewContacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters \"\u003cfirstname\u003e\", \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "crm-create-contacts;crm-create-a-new-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 18,
      "id": "crm-create-contacts;crm-create-a-new-contact;;1"
    },
    {
      "cells": [
        "sherinethachil@gmail.com",
        "test@123",
        "sherine",
        "thomas",
        "QA Engineer"
      ],
      "line": 19,
      "id": "crm-create-contacts;crm-create-a-new-contact;;2"
    },
    {
      "cells": [
        "sherinethachil@gmail.com",
        "test@123",
        "merine",
        "thomas",
        "Manager"
      ],
      "line": 20,
      "id": "crm-create-contacts;crm-create-a-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "CRM create a new contact",
  "description": "",
  "id": "crm-create-contacts;crm-create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"sherinethachil@gmail.com\" and user enters \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on AddNewContacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters \"sherine\", \"thomas\" and \"QA Engineer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8684259900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 13862200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sherinethachil@gmail.com",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 56
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_user_enters_password(String,String)"
});
formatter.result({
  "duration": 722268900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 146242600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 12978900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Contacts_link()"
});
formatter.result({
  "duration": 1073630900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 674580600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_AddNewContacts_Page()"
});
formatter.result({
  "duration": 439341400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sherine",
      "offset": 13
    },
    {
      "val": "thomas",
      "offset": 24
    },
    {
      "val": "QA Engineer",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 1298218300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 100620700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 240021400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "CRM create a new contact",
  "description": "",
  "id": "crm-create-contacts;crm-create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"sherinethachil@gmail.com\" and user enters \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on AddNewContacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters \"merine\", \"thomas\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 7474481200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 10666300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sherinethachil@gmail.com",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 56
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_user_enters_password(String,String)"
});
formatter.result({
  "duration": 480891500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 129013100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 34997700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Contacts_link()"
});
formatter.result({
  "duration": 1198108700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 518052000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_AddNewContacts_Page()"
});
formatter.result({
  "duration": 283418300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "merine",
      "offset": 13
    },
    {
      "val": "thomas",
      "offset": 23
    },
    {
      "val": "Manager",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String,String)"
});
formatter.result({
  "duration": 1008545900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 99040000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 224597600,
  "status": "passed"
});
});