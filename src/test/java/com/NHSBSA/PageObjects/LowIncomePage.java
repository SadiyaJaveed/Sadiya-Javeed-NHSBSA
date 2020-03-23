package com.NHSBSA.PageObjects;

import org.openqa.selenium.WebDriver;

public class LowIncomePage extends AbstractPage{

	public LowIncomePage(WebDriver driver) {
		super(driver);
	}
	
	public String getResult() {
		return driver.getCurrentUrl();
	}

}
