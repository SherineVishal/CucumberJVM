$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sheri/git/CucumberJVM/CRMBDDFramework/src/main/java/Feature/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "CRM application testing",
  "description": "",
  "id": "crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Login with incorrect username and password",
  "description": "",
  "id": "crm-application-testing;login-with-incorrect-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "This is a invalid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_login_test()"
});
formatter.result({
  "duration": 222625400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create a task",
  "description": "",
  "id": "crm-application-testing;create-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "This is a task testcase",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_task_testcase()"
});
formatter.result({
  "duration": 70100,
  "status": "passed"
});
});