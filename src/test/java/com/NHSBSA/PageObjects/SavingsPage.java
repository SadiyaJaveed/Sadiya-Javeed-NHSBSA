package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SavingsPage extends AbstractPage {

	public SavingsPage(WebDriver driver) {
		super(driver);
	}
	
	public ResultsPage selectCheckbox( ) {
		driver.findElement(By.id("label-no")).click();
		driver.findElement(By.id("next-button")).click();
		return new ResultsPage (driver);
	}

}
