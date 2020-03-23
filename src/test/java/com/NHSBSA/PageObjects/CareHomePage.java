package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CareHomePage extends AbstractPage {

	public CareHomePage(WebDriver driver) {
		super(driver);
	}
	
	public SavingsPage selectCheckbox( ) {
		driver.findElement(By.id("label-no")).click();
		driver.findElement(By.id("next-button")).click();
		return new SavingsPage (driver);
	}
}
