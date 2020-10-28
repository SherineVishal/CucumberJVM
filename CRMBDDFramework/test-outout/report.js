$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sheri/git/CucumberJVM/CRMBDDFramework/src/main/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login Feature",
  "description": "",
  "id": "crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "CRM Login Test Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario",
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
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 6568595500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 37404600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_user_enters_password()"
});
formatter.result({
  "duration": 673500500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 172573400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 10142300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 305562500,
  "status": "passed"
});
});