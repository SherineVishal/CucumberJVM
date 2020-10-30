//package StepDefinitions;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class HooksStepDefinition {
//	
//	@Before //global hooks
//	public void setUp()
//	{
//		System.out.println("Launch chrome");
//		 System.out.println("Enter URL for CRM App");
//	}
//	
//	@Given("^user is on deals page$")
//	public void user_is_on_deals_page() throws Throwable {
//	    System.out.println("user is on deals page");
//	}
//
//	@When("^user fills the deals form$")
//	public void user_fills_the_deals_form() throws Throwable {
//		 System.out.println("user fills the deals form");
//	}
//
//	@Then("^deal is created$")
//	public void deal_is_created() throws Throwable {
//		 System.out.println("deal is created");
//	}
//	
//	@After
//	public void tearDown()
//	{
//		System.out.println("close the browser");
//	}
//
//}
