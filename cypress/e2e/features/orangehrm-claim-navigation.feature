@dashboard @claim
Feature: OrangeHRM claim module
  As a logged-in user
  I want to validate Claim navigation and Employee Claims controls
  So I can trust the Claim module baseline behavior

  Background:
    Given I am logged in on the OrangeHRM dashboard

  Scenario: Open Claim module from dashboard menu
    When I open the Claim module
    Then I should be on the Claim module route
    And I should see the Claim top breadcrumb
    And the Claim side menu item should be active

  Scenario: Verify Employee Claims filter and table controls
    When I open the Claim module
    Then I should see the Employee Claims title
    And I should see claim filter fields
    And I should see claim filter action buttons
    And I should see the Assign Claim button
    And I should see claim records found text
    And I should see claim table headers
    And I should see at least one claim record
    And I should see claim row action button
