package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page()
	{
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\sheri\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		
	}
	
	@When("^title of login page is Cogmento CRM$")
	public void title_of_login_page_is_Cogmento_CRM() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	    
	}

	@Then("^user enters username and user enters password$")
	public void user_enters_username_and_user_enters_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys("sherinethachil@gmail.com");
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("test@123");
	    
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//div[text()='Login']")).click();
	    
	}

	@Then("^user is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String title=driver.getTitle();
		System.out.print("Home page title :"+title);
		Assert.assertEquals("Cogmento CRM", title);	    
	
	}
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.close();   
	
	}
}
