@dashboard @leave
Feature: OrangeHRM leave module
  As a logged-in user
  I want to validate Leave navigation and Leave List controls
  So I can trust the Leave module baseline UI

  Scenario: Open Leave module from dashboard menu
    Given I login and open leave navigation checks
    When I click the Leave side menu tab
    Then I should be on the Leave module route
    And I should see the Leave top breadcrumb
    And the Leave side menu item should be active

  Scenario: Verify Leave List filter and table controls
    Given I login and open leave list checks
    When I click the Leave side menu tab for leave list checks
    Then I should see the Leave List title
    And I should see leave filter fields
    And I should see leave filter action buttons
    And I should see leave records found text
    And I should see leave table headers
    And I should see at least one leave record
    And I should see leave row actions
