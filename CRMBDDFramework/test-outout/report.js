$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sheri/git/CucumberJVM/CRMBDDFramework/src/main/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login Feature",
  "description": "",
  "id": "crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# without examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Cogmento CRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"sherinethachil@gmail.com\" and user enters \"test@123\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is on Home Page"
    },
    {
      "line": 11,
      "value": "#Then close the browser"
    },
    {
      "line": 13,
      "value": "# with examples keyword"
    }
  ],
  "line": 14,
  "name": "CRM Login Test Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and user enters \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "crm-login-feature;crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "sherinethachil@gmail.com",
        "test@123"
      ],
      "line": 25,
      "id": "crm-login-feature;crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "merinethachil@gmail.com",
        "test@456"
      ],
      "line": 26,
      "id": "crm-login-feature;crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "CRM Login Test Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"sherinethachil@gmail.com\" and user enters \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 6689663700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 13789700,
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
  "duration": 657291400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 110625300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8481100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 212811400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CRM Login Test Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"merinethachil@gmail.com\" and user enters \"test@456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 6060025400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 12998900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "merinethachil@gmail.com",
      "offset": 13
    },
    {
      "val": "test@456",
      "offset": 55
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_user_enters_password(String,String)"
});
formatter.result({
  "duration": 490677300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 115020100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 10207000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 217287600,
  "status": "passed"
});
});