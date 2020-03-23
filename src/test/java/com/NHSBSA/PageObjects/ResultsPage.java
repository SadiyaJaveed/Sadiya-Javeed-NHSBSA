package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ResultsPage extends AbstractPage {

	public ResultsPage(WebDriver driver) {
		super(driver);
	}
	
	public String getResult() {
		return driver.findElement(By.id("result-heading")).getText();
	}
	
	public LowIncomePage findOutMore( ) {
		driver.findElement(By.id("lis-button")).click();
		return new LowIncomePage(driver);
	}
}
