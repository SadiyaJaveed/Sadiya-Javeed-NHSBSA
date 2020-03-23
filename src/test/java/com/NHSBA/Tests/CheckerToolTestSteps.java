package com.NHSBA.Tests;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.NHSBSA.PageObjects.BenefitsTaxPage;
import com.NHSBSA.PageObjects.CareHomePage;
import com.NHSBSA.PageObjects.CountryPage;
import com.NHSBSA.PageObjects.DateofBirthPage;
import com.NHSBSA.PageObjects.DiabetesPage;
import com.NHSBSA.PageObjects.GlaucomaPage;
import com.NHSBSA.PageObjects.LowIncomePage;
import com.NHSBSA.PageObjects.PartnerPage;
import com.NHSBSA.PageObjects.PregnancyPage;
import com.NHSBSA.PageObjects.ResultPage;
import com.NHSBSA.PageObjects.ResultsPage;
import com.NHSBSA.PageObjects.SavingsPage;
import com.NHSBSA.PageObjects.StartPage;
import com.NHSBSA.PageObjects.TeenagerPage;
import com.NHSBSA.PageObjects.WarPensionerPage;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CheckerToolTestSteps {
	
	WebDriver driver;
	StartPage startpage;
	CountryPage countrypage;
	DateofBirthPage dateofbirthpage;
	PartnerPage partnerpage;
	BenefitsTaxPage benefitstaxpage;
	PregnancyPage pregnancypage;
	WarPensionerPage warpensionerpage;
	DiabetesPage diabetespage;
	GlaucomaPage glaucomapage;
	CareHomePage carehomepage;
	SavingsPage savingspage;
	ResultsPage resultspage;
	LowIncomePage lowincomepage;
	TeenagerPage teenagerpage;
	ResultPage resultpage;
	
	
	@Given("I have opened the NHS Cost Checker Tool")
	public void i_have_opened_the_NHS_Cost_Checker_Tool() {
		startpage = new StartPage(driver);
	    startpage.navigateToAppInFirefox();
	}
	
	@Given("click on the {string} button")
	public void click_on_the_button(String start) {
		countrypage = startpage.clickButton();
	}

	@Then("I successfully land in the Country page")
	public void i_successfully_land_in_the_Country_page() {
		Assert.assertTrue(countrypage.getText().contains("country"));
	}

	@Then("I close the browser")
	public void i_close_the_browser() {
	    countrypage.closeDriver();
	}
	
	@When("I provide the date of birth as {string}")
	public void i_provide_the_date_of_birth_as(String dates) {
	    teenagerpage = dateofbirthpage.selectDOB();
	}

	@Then("I receive information regarding the help I would get with the NHS costs")
	public void i_receive_information_regarding_the_help_I_would_get_with_the_NHS_costs() {
		Assert.assertTrue(teenagerpage.getResult().contains("help"));
	}

	@When("I select Country as {string}")
	public void i_select_Country_as(String ireland) {
	    countrypage.selectIreland();
	}
	
	@When("cllick on {string} button")
	public void cllick_on_button(String next) {
	    resultpage = countrypage.clickNext();
	}

	@Then("I receive a message that I cannot use the service")
	public void i_receive_a_message_that_I_cannot_use_the_service() {
		Assert.assertTrue(resultpage.getResult().contains("cannot"));
	}

	@When("click on {string} button")
	public void click_on_button(String nxt) {
	    countrypage.clickButton();
	}

	@Then("I receive an error")
	public void i_receive_an_error() {
		Assert.assertTrue(countrypage.getError().contains("problem"));
	}

	@When("I select the Country as {string}")
	public void i_select_the_Country_as(String wales) {
	    dateofbirthpage = countrypage.selectCountry();
	}

	@When("I provide date of birth as {string}")
	public void i_provide_date_of_birth_as(String dateday) {
	   dateofbirthpage.selectInvalidDOB();
	}
	
	@When("clicks on {string} button")
	public void clicks_on_button(String nextbtn) {
	    dateofbirthpage.clickButton();
	}

	@Then("I receive an error message")
	public void i_receive_an_error_message() {
		Assert.assertTrue(dateofbirthpage.getError().contains("problem"));
	}
	
	@Then("close the browser")
	public void close_the_browser() {
	    dateofbirthpage.closeDriver();
	}

	@When("I click on {string} button")
	public void i_click_on_button(String nxtbtnclk) {
	   countrypage = dateofbirthpage.returnBack();
	}

	@And("click on the Start button")
	public void click_on_the_Start_button() {
		countrypage = startpage.clickButton();
	}
	
	@When("I choose the country as Wales")
	public void i_choose_the_country_as_Wales() {
		dateofbirthpage = countrypage.selectCountry();
	}

	@When("provide the date of birth as {int} {int} {int}")
	public void provide_the_date_of_birth_as(Integer date, Integer month, Integer year) {
	  partnerpage = dateofbirthpage.selectValidDOB();
	}

	@When("select the partner option as No")
	public void select_the_partner_option_as_No() {
	    benefitstaxpage = partnerpage.selectCheckbox();
	}

	@When("select No for claiming benefits and tax credits")
	public void select_No_for_claiming_benefits_and_tax_credits() {
	    pregnancypage = benefitstaxpage.selectCheckBox();
	}

	@When("select option for given birth in last {int} months or pregnant as No")
	public void select_option_for_given_birth_in_last_months_or_pregnant_as_No(Integer birth) {
	    warpensionerpage = pregnancypage.selectCheckbox();
	}

	@When("select No for injury or illness caused by serving in the armed forces")
	public void select_No_for_injury_or_illness_caused_by_serving_in_the_armed_forces() {
	    diabetespage = warpensionerpage.selectCheckbox();
	}

	@When("select No for having diabetes")
	public void select_No_for_having_diabetes() {
	    glaucomapage = diabetespage.selectCheckbox();
	}

	@When("select No for having glaucoma")
	public void select_No_for_having_glaucoma() {
	    carehomepage = glaucomapage.selectCheckbox();
	}

	@When("select No for permanently living in a care home")
	public void select_No_for_permanently_living_in_a_care_home() {
		savingspage = carehomepage.selectCheckbox();
	}

	@When("select No for having more than £16,{int} in savings, investments or property")
	public void select_No_for_having_more_than_£16_in_savings_investments_or_property(Integer savings) {
	    resultspage = savingspage.selectCheckbox();
	}

	@Then("I would receive information regarding the help I would get with the NHS costs")
	public void i_would_receive_information_regarding_the_help_I_would_get_with_the_NHS_costs() {
	    Assert.assertTrue(resultspage.getResult().contains("help"));
	}
	
	@Then("I will then close the browser")
	public void i_will_then_close_the_browser() {
		resultspage.closeDriver();
	}
	
	@When("I clck on Find Out More button")
	public void i_clck_on_Find_Out_More_button() {
	    lowincomepage = resultspage.findOutMore();
	}

	@Then("I'm taken to the NHS low income scheme page")
	public void i_m_taken_to_the_NHS_low_income_scheme_page() {
		Assert.assertTrue(lowincomepage.getResult().contains("income"));
	}
	
	@Then("I will close the browser")
	public void i_will_close_the_browser() {
		lowincomepage.closeDriver();
	}
}