package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class BenefitsTaxPage extends AbstractPage{

	public BenefitsTaxPage(WebDriver driver) {
		super(driver);
	}
	
	public PregnancyPage selectCheckBox() {
		driver.findElement(By.id("label-no")).click();
		driver.findElement(By.id("next-button")).click();
		return new PregnancyPage(driver);
	}
}