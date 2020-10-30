package StepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHookStepDefinition {

	@Before(order=0) //global hooks
	public void setUp()
	{
		System.out.println("Launch chrome");
		System.out.println("Enter URL for CRM App");
	}
	
	@Before("@First") //global hooks
	public void setUpFirst()
	{
		System.out.println("setUpFirst");
	}

	@Given("^user is on contacts page$")
	public void user_is_on_contacts_page() throws Throwable {
		System.out.println("user is on contacts page");
	}

	@When("^user fills the contact form$")
	public void user_fills_the_contact_form() throws Throwable {
		System.out.println("user fills the contacts form");
	}

	@Then("^contact is created$")
	public void contact_is_created() throws Throwable {
		System.out.println("contact is created");
	}

	@Given("^user is on deals page$")
	public void user_is_on_deals_page() throws Throwable {
		System.out.println("user is on deals page");
	}

	@When("^user fills the deals form$")
	public void user_fills_the_deals_form() throws Throwable {
		System.out.println("user fills the deals form");
	}

	@Then("^deal is created$")
	public void deal_is_created() throws Throwable {
		System.out.println("deal is created");
	}

	@Given("^user is on case page$")
	public void user_is_on_case_page() throws Throwable {
		System.out.println("user is on case page");
	}

	@When("^user fills the case form$")
	public void user_fills_the_case_form() throws Throwable {
		System.out.println("uuser fills the case form");
	}

	@Then("^case is created$")
	public void case_is_created() throws Throwable {
		System.out.println("case is created");
	}
	
	@After
	public void tearDown()
	{
	System.out.println("close the browser");
	}
	
	@After("@First")
	public void tearDownFirst()
	{
	System.out.println("tearDownFirst");
	}
}
