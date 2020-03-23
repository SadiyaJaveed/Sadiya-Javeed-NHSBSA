package com.NHSBSA.PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ResultPage extends AbstractPage {

	public ResultPage(WebDriver driver) {
		super(driver);
	}
	
	public String getResult() {
		return driver.findElement(By.id("result-heading")).getText();
	}

}
