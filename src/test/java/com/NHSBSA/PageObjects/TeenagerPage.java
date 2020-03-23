package com.NHSBSA.PageObjects;

import org.openqa.selenium.WebDriver;

public class TeenagerPage extends AbstractPage {

	public TeenagerPage(WebDriver driver) {
		super(driver);
	}
	
	public String getResult() {
		return driver.getTitle();
	}

}
