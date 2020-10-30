$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sheri/git/CucumberJVM/CRMBDDFramework/src/main/java/Feature/deals.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Deal Data Creation",
  "description": "",
  "id": "crm-deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "CRM create a new deal",
  "description": "",
  "id": "crm-deal-data-creation;crm-create-a-new-deal",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enters username and user enters password",
  "rows": [
    {
      "cells": [
        "sherinethachil@gmail.com",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Deals link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is on AddNewDeals Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8858193400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 26205800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_user_enters_password(DataTable)"
});
formatter.result({
  "duration": 530768300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 149714900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 24022600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_Deals_link()"
});
formatter.result({
  "duration": 1072499800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 267419600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_AddNewDeals_Page()"
});
formatter.result({
  "duration": 68944100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_and(DataTable)"
});
formatter.result({
  "duration": 829602100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 87912900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 250656700,
  "status": "passed"
});
});