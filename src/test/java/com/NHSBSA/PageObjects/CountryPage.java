package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CountryPage extends AbstractPage {

	public CountryPage(WebDriver driver) {
		super(driver);
	}
	
	public DateofBirthPage selectCountry() {
		driver.findElement(By.id("label-wales")).click();
		driver.findElement(By.id("next-button")).click();
		return new DateofBirthPage(driver);
	}
	
	public CountryPage selectCountryOnly() {
		driver.findElement(By.id("label-wales")).click();
		return new CountryPage(driver);
	}
	
	public CountryPage selectIreland() {
		driver.findElement(By.id("label-nire")).click();
		return new CountryPage(driver);
	}
	
	public ResultPage clickNext() {
		driver.findElement(By.id("next-button")).click();
		return new ResultPage(driver);
	}
	
	public String getText() {
		return driver.findElement(By.id("question-heading")).getText();
	}
	
	public String getError() {
		return driver.findElement(By.id("error-summary-heading")).getText();
	}
		
	public CountryPage clickButton() {
		try {
			driver.findElement(By.id("next-button")).click();
			return new CountryPage(driver);
		} catch (Exception e) {
			return new CountryPage(driver);
		}
		
	}
	
}
