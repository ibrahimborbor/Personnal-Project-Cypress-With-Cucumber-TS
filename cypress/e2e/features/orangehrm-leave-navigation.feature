@dashboard @leave
Feature: OrangeHRM leave module
  As a logged-in user
  I want to validate Leave navigation and Leave List controls
  So I can trust the Leave module baseline UI

  Background:
    Given I am logged in on the OrangeHRM dashboard

  Scenario: Open Leave module from dashboard menu
    When I open the Leave module
    Then I should be on the Leave module route
    And I should see the Leave top breadcrumb
    And the Leave side menu item should be active

  Scenario: Verify Leave List filter and table controls
    When I open the Leave module
    Then I should see the Leave List title
    And I should see leave filter fields
    And I should see leave filter action buttons
    And I should see leave records found text
    And I should see leave table headers
    And I should see at least one leave record
    And I should see leave row actions
