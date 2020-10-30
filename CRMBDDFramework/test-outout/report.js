$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sheri/git/CucumberJVM/CRMBDDFramework/src/main/java/Feature/dealsmap.feature");
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "sherinethachil@gmail.com",
        "test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Deals link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user is on AddNewDeals Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 18
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 19
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8927127200,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 22573900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_username_and_user_enters_password(DataTable)"
});
formatter.result({
  "duration": 538812900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 92991100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8948100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_clicks_on_Deals_link()"
});
formatter.result({
  "duration": 1268904500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 428396300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_on_AddNewDeals_Page()"
});
formatter.result({
  "duration": 62354600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_and(DataTable)"
});
formatter.result({
  "duration": 6513900700,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.close_the_browser()"
});
formatter.result({
  "duration": 246300300,
  "status": "passed"
});
});