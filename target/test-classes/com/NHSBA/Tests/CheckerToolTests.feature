Feature: Test the functionality of NHS Costs Checker Tool with various postitive and negative scenarios 

Background: Common Steps for all scenarios 
	Given I have opened the NHS Cost Checker Tool 
	And click on the Start button 

@Smoke 
Scenario: Start Functionality 
	To verify that I'm able to initiate the process to check what help I could get to pay for NHS costs in the Checker Tool
	Then I successfully land in the Country page 
	And I close the browser
		
@Functional @Positive 
Scenario: Result Under16 
	To verify that as an under 16 I would receive help from NHS when I enter my date of birth
	When I select the Country as "Wales" 
	And click on "Next" button 
	When I provide the date of birth as "22 02 2018" 
	Then I receive information regarding the help I would get with the NHS costs 
	And I close the browser 
	
@Functional @Negative 
Scenario: Cannot Use The Service 
	To verify as a person from Northern Ireland I'm not allowed to use the service
	When I select Country as "Northern Ireland" 
	And cllick on "Next" button 
	Then I receive a message that I cannot use the service 
	And I close the browser 
	
@Functional @Negative 
Scenario: Country Not Selected 
	To verify that I receive an error when I dont select the Country
	When click on "Next" button 
	Then I receive an error 
	And I close the browser 
	
@Functional @Negative 
Scenario: Accepts Only Past Date 
	To verify that the date of birth field accepts only past date
	When I select the Country as "Wales" 
	When I provide date of birth as "22 02 2021" 
	And clicks on "Next" button 
	Then I receive an error message 
	And close the browser 
	
@Functional @Positive 
Scenario: Back Button Functionality 
	To verify that the back button takes me to the previous page
	When I select the Country as "Wales" 
	When I click on "Back" button 
	Then I successfully land in the Country page 
	And I close the browser 
	
@Integration	
Scenario: E2E_Results Page Functionality 
	To verify that as a person from Wales I would receive help with the NHS costs when all the circumstances are provided in the Checker tool 
	When I choose the country as Wales 
	And provide the date of birth as 25 02 1989 
	And select the partner option as No 
	And select No for claiming benefits and tax credits 
	And select option for given birth in last 12 months or pregnant as No 
	And select No for injury or illness caused by serving in the armed forces 
	And select No for having diabetes 
	And select No for having glaucoma 
	And select No for permanently living in a care home 
	And select No for having more than £16,000 in savings, investments or property 
	Then I would receive information regarding the help I would get with the NHS costs 
	And I will then close the browser 

@Integration @EndToEnd	
Scenario: E2E_Find Out More Functionality 
	To verify that as a person from Wales when choose to find out more about the NHS costs help then I'm taken to the low income scheme page
	When I choose the country as Wales 
	And provide the date of birth as 25 02 1989 
	And select the partner option as No 
	And select No for claiming benefits and tax credits 
	And select option for given birth in last 12 months or pregnant as No 
	And select No for injury or illness caused by serving in the armed forces 
	And select No for having diabetes 
	And select No for having glaucoma 
	And select No for permanently living in a care home 
	And select No for having more than £16,000 in savings, investments or property 
	Then I would receive information regarding the help I would get with the NHS costs 
	When I clck on Find Out More button
	Then I'm taken to the NHS low income scheme page
	And I will close the browser