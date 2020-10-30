$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sheri/git/CucumberJVM/CRMBDDFramework/src/main/java/Feature/taggedhooks.feature");
formatter.feature({
  "line": 1,
  "name": "CRM App test",
  "description": "",
  "id": "crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 439300,
  "status": "passed"
});
formatter.before({
  "duration": 166200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "CRM create contact test",
  "description": "",
  "id": "crm-app-test;crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on contacts page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHookStepDefinition.user_is_on_contacts_page()"
});
formatter.result({
  "duration": 258095101,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefinition.user_fills_the_contact_form()"
});
formatter.result({
  "duration": 586200,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefinition.contact_is_created()"
});
formatter.result({
  "duration": 228500,
  "status": "passed"
});
formatter.after({
  "duration": 236599,
  "status": "passed"
});
formatter.after({
  "duration": 173300,
  "status": "passed"
});
formatter.before({
  "duration": 676401,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "CRM create deal test",
  "description": "",
  "id": "crm-app-test;crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on deals page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHookStepDefinition.user_is_on_deals_page()"
});
formatter.result({
  "duration": 118900,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefinition.user_fills_the_deals_form()"
});
formatter.result({
  "duration": 227800,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefinition.deal_is_created()"
});
formatter.result({
  "duration": 283399,
  "status": "passed"
});
formatter.after({
  "duration": 281799,
  "status": "passed"
});
formatter.before({
  "duration": 714100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "CRM create case test",
  "description": "",
  "id": "crm-app-test;crm-create-case-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is on case page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user fills the case form",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "case is created",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHookStepDefinition.user_is_on_case_page()"
});
formatter.result({
  "duration": 225100,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefinition.user_fills_the_case_form()"
});
formatter.result({
  "duration": 240100,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHookStepDefinition.case_is_created()"
});
formatter.result({
  "duration": 185100,
  "status": "passed"
});
formatter.after({
  "duration": 219400,
  "status": "passed"
});
});