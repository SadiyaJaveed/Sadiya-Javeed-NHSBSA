package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class WarPensionerPage extends AbstractPage {

	public WarPensionerPage(WebDriver driver) {
		super(driver);
	}
	
	public DiabetesPage selectCheckbox( ) {
		driver.findElement(By.id("label-no")).click();
		driver.findElement(By.id("next-button")).click();
		return new DiabetesPage (driver);
	}
}
