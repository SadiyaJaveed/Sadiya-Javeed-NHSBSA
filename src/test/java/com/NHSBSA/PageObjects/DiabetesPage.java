package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DiabetesPage extends AbstractPage {

	public DiabetesPage(WebDriver driver) {
		super(driver);
	}
	
	public GlaucomaPage selectCheckbox( ) {
		driver.findElement(By.id("label-no")).click();
		driver.findElement(By.id("next-button")).click();
		return new GlaucomaPage (driver);
	}
}
