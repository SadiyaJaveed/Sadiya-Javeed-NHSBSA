package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DateofBirthPage extends AbstractPage {

	public DateofBirthPage(WebDriver driver) {
		super(driver);
	}
	
	public PartnerPage selectValidDOB() {
		driver.findElement(By.id("dob-day")).sendKeys("22");
		driver.findElement(By.name("dateOfBirth.month")).sendKeys("02");
		driver.findElement(By.name("dateOfBirth.year")).sendKeys("1989");
		driver.findElement(By.id("next-button")).click();
		return new PartnerPage(driver);
	}
	
	public DateofBirthPage selectInvalidDOB() {
		driver.findElement(By.id("dob-day")).sendKeys("22");
		driver.findElement(By.name("dateOfBirth.month")).sendKeys("02");
		driver.findElement(By.name("dateOfBirth.year")).sendKeys("2021");
		return new DateofBirthPage(driver);
	}
	
	public CountryPage returnBack() {
		driver.findElement(By.id("back-button")).click();
		return new CountryPage(driver);
	}
		
		public DateofBirthPage clickButton() {
			try {
				driver.findElement(By.id("next-button")).click();
				return new DateofBirthPage(driver);
			} catch (Exception e) {
				System.out.println(e);
				return new DateofBirthPage(driver);
			}
		}

		public String getError() {
			return driver.findElement(By.id("error-summary-heading")).getText();
		}
		
		public TeenagerPage selectDOB() {
			driver.findElement(By.id("dob-day")).sendKeys("22");
			driver.findElement(By.name("dateOfBirth.month")).sendKeys("02");
			driver.findElement(By.name("dateOfBirth.year")).sendKeys("2018");
			driver.findElement(By.id("next-button")).click();
			return new TeenagerPage(driver);
		}
		
		
	
}
