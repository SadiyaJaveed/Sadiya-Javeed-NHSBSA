package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class GlaucomaPage extends AbstractPage {

	public GlaucomaPage(WebDriver driver) {
		super(driver);
	}
	
	public CareHomePage selectCheckbox( ) {
		driver.findElement(By.id("label-no")).click();
		driver.findElement(By.id("next-button")).click();
		return new CareHomePage (driver);
	}
}
