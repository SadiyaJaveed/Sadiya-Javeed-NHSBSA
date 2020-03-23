package com.NHSBA.Tests;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions
	(features = { "src/test/java/com/NHSBA/Tests" },
	plugin = { "pretty", "html:target/Cucumber-Test-Report" }, 
	dryRun = false,
	monochrome = true)

public class TestNGRunner extends AbstractTestNGCucumberTests {

}
