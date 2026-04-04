@dashboard @performance
Feature: OrangeHRM performance module
  As a logged-in user
  I want to validate Performance navigation and Employee Reviews controls
  So I can trust the Performance module baseline behavior

  Background:
    Given I am logged in on the OrangeHRM dashboard

  Scenario: Open Performance module from dashboard menu
    When I open the Performance module
    Then I should be on the Performance module route
    And I should see the Performance top breadcrumb
    And the Performance side menu item should be active

  Scenario: Verify Employee Reviews filter and result table controls
    When I open the Performance module
    Then I should see the Employee Reviews title
    And I should see performance filter fields
    And I should see performance filter action buttons
    And I should see performance records found text
    And I should see performance table headers
    And I should see performance results area
