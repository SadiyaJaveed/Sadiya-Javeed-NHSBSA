package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class PartnerPage extends AbstractPage {

	public PartnerPage(WebDriver driver) {
		super(driver);
	}
	
	public BenefitsTaxPage selectCheckbox( ) {
		driver.findElement(By.id("label-no")).click();
		driver.findElement(By.id("next-button")).click();
		return new BenefitsTaxPage (driver);
	}
}
