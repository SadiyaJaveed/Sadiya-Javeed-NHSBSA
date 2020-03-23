package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class PregnancyPage extends AbstractPage{

	public PregnancyPage(WebDriver driver) {
		super(driver);
	}

	public WarPensionerPage selectCheckbox( ) {
		driver.findElement(By.id("label-no")).click();
		driver.findElement(By.id("next-button")).click();
		return new WarPensionerPage (driver);
	}
}