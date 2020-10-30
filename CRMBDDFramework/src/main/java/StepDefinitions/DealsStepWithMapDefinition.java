package StepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepWithMapDefinition {
	
	WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page()
	{
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\sheri\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
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
	public void user_enters_username_and_user_enters_password(DataTable credentials) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		for(Map<String,String> data:credentials.asMaps(String.class, String.class))
		{
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(data.get("username"));
			driver.findElement(By.xpath("//input[@name='password']")).sendKeys(data.get("password"));
		}

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

	@Then("^user clicks on Deals link$")
	public void user_clicks_on_Deals_link() throws Throwable {


		WebElement element=driver.findElement(By.xpath("//span[text()='Deals']"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();",element);

	}

	@Then("^user clicks on New button$")
	public void user_clicks_on_New_button() throws Throwable {
		driver.findElement(By.xpath("//button[text()='New']")).click();	    
	}

	@Then("^user is on AddNewDeals Page$")
	public void user_is_on_AddNewDeals_Page() throws Throwable {
		String actualUrl=driver.getCurrentUrl();
		String expectedUrl="https://ui.freecrm.com/deals/new";
		Assert.assertEquals(expectedUrl, actualUrl);
	}

	@Then("^user enters deal details$")
	public void user_enters_and(DataTable credentials) throws Throwable {

		for(Map<String,String> data:credentials.asMaps(String.class, String.class))
		{
			driver.findElement(By.xpath("//input[@name='title']")).sendKeys(data.get("title"));
			driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(data.get("amount"));
			driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(data.get("probability"));
			driver.findElement(By.xpath("//input[@name='commission']")).sendKeys(data.get("commission"));
			driver.findElement(By.xpath("//button[text()='Save']")).click();
			
			Thread.sleep(1000);
			WebElement element=driver.findElement(By.xpath("//span[text()='Deals']"));
			JavascriptExecutor js=(JavascriptExecutor)driver;
			js.executeScript("arguments[0].click();",element);
			driver.findElement(By.xpath("//button[text()='New']")).click();
		}
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.close();   

	}

}
