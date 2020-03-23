package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class StartPage extends AbstractPage {

	public StartPage(WebDriver driver) {
		super(driver);
	}

	public CountryPage clickButton() {
		driver.findElement(By.id("next-button")).click();
		return new CountryPage(driver);
	}

}
