package com.NHSBSA.PageObjects;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class AbstractPage {
	
	protected WebDriver driver;
	
	public AbstractPage (WebDriver driver) {
		this.driver = driver;
	}
	
	public StartPage navigateToAppInChrome () {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\IBM_ADMIN\\Selenium\\Chrome Driver\\chromedriver_win32\\chromedriver.exe\\");
		driver = new ChromeDriver();
		
		driver.get("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
		return new StartPage(driver);
	}
	
	public StartPage navigateToAppInFirefox () {
		System.setProperty("webdriver.gecko.driver","C:\\Users\\IBM_ADMIN\\Selenium\\geckodriver-v0.26.0-win32\\geckodriver.exe\\");
		FirefoxOptions firefoxoptions = new FirefoxOptions();
		firefoxoptions.addPreference("marionette" , true);
		driver = new FirefoxDriver(firefoxoptions);
		
		driver.get("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start");
		driver.manage().window().maximize();
		
		return new StartPage(driver);
	}
	
	public void closeDriver () {
		driver.close();
	}

}
