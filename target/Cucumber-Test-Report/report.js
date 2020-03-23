$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/NHSBA/Tests/CheckerToolTests.feature");
formatter.feature({
  "name": "Test the functionality of NHS Costs Checker Tool with various postitive and negative scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Common Steps for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have opened the NHS Cost Checker Tool",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_have_opened_the_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Start Functionality",
  "description": "\tTo verify that I\u0027m able to initiate the process to check what help I could get to pay for NHS costs in the Checker Tool",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I successfully land in the Country page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_successfully_land_in_the_Country_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Common Steps for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have opened the NHS Cost Checker Tool",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_have_opened_the_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Result Under16",
  "description": "\tTo verify that as an under 16 I would receive help from NHS when I enter my date of birth",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I select the Country as \"Wales\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_select_the_Country_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide the date of birth as \"22 02 2018\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_provide_the_date_of_birth_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive information regarding the help I would get with the NHS costs",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_receive_information_regarding_the_help_I_would_get_with_the_NHS_costs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Common Steps for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have opened the NHS Cost Checker Tool",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_have_opened_the_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cannot Use The Service",
  "description": "\tTo verify as a person from Northern Ireland I\u0027m not allowed to use the service",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I select Country as \"Northern Ireland\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_select_Country_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cllick on \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.cllick_on_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive a message that I cannot use the service",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_receive_a_message_that_I_cannot_use_the_service()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Common Steps for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have opened the NHS Cost Checker Tool",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_have_opened_the_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Country Not Selected",
  "description": "\tTo verify that I receive an error when I dont select the Country",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "click on \"Next\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive an error",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_receive_an_error()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Common Steps for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have opened the NHS Cost Checker Tool",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_have_opened_the_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Accepts Only Past Date",
  "description": "\tTo verify that the date of birth field accepts only past date",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I select the Country as \"Wales\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_select_the_Country_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide date of birth as \"22 02 2021\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_provide_date_of_birth_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.clicks_on_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_receive_an_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Common Steps for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have opened the NHS Cost Checker Tool",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_have_opened_the_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Back Button Functionality",
  "description": "\tTo verify that the back button takes me to the previous page",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I select the Country as \"Wales\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_select_the_Country_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Back\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_click_on_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully land in the Country page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_successfully_land_in_the_Country_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Common Steps for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have opened the NHS Cost Checker Tool",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_have_opened_the_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "E2E_Results Page Functionality",
  "description": "\tTo verify that as a person from Wales I would receive help with the NHS costs when all the circumstances are provided in the Checker tool ",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Integration"
    }
  ]
});
formatter.step({
  "name": "I choose the country as Wales",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_choose_the_country_as_Wales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide the date of birth as 25 02 1989",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.provide_the_date_of_birth_as(java.lang.Integer,java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the partner option as No",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_the_partner_option_as_No()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for claiming benefits and tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_claiming_benefits_and_tax_credits()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select option for given birth in last 12 months or pregnant as No",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_option_for_given_birth_in_last_months_or_pregnant_as_No(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_injury_or_illness_caused_by_serving_in_the_armed_forces()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for having diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_having_diabetes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for having glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_having_glaucoma()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for permanently living in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_permanently_living_in_a_care_home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for having more than £16,000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_having_more_than_£16_in_savings_investments_or_property(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I would receive information regarding the help I would get with the NHS costs",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_would_receive_information_regarding_the_help_I_would_get_with_the_NHS_costs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will then close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_will_then_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Common Steps for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have opened the NHS Cost Checker Tool",
  "keyword": "Given "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_have_opened_the_NHS_Cost_Checker_Tool()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.click_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "E2E_Find Out More Functionality",
  "description": "\tTo verify that as a person from Wales when choose to find out more about the NHS costs help then I\u0027m taken to the low income scheme page",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Integration"
    },
    {
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "name": "I choose the country as Wales",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_choose_the_country_as_Wales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide the date of birth as 25 02 1989",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.provide_the_date_of_birth_as(java.lang.Integer,java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the partner option as No",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_the_partner_option_as_No()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for claiming benefits and tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_claiming_benefits_and_tax_credits()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select option for given birth in last 12 months or pregnant as No",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_option_for_given_birth_in_last_months_or_pregnant_as_No(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for injury or illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_injury_or_illness_caused_by_serving_in_the_armed_forces()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for having diabetes",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_having_diabetes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for having glaucoma",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_having_glaucoma()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for permanently living in a care home",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_permanently_living_in_a_care_home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select No for having more than £16,000 in savings, investments or property",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.select_No_for_having_more_than_£16_in_savings_investments_or_property(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I would receive information regarding the help I would get with the NHS costs",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_would_receive_information_regarding_the_help_I_would_get_with_the_NHS_costs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clck on Find Out More button",
  "keyword": "When "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_clck_on_Find_Out_More_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m taken to the NHS low income scheme page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_m_taken_to_the_NHS_low_income_scheme_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.NHSBA.Tests.CheckerToolTestSteps.i_will_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});