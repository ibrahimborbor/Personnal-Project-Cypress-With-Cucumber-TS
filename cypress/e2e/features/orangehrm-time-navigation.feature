@dashboard @time
Feature: OrangeHRM time module
  As a logged-in user
  I want to validate Time navigation and pending timesheets controls
  So I can trust the Time module baseline behavior

  Scenario: Open Time module from dashboard menu
    Given I login and open time navigation checks
    When I click the Time side menu tab
    Then I should be on the Time module route
    And I should see the Time top breadcrumb
    And the Time side menu item should be active

  Scenario: Verify Select Employee and pending timesheets table controls
    Given I login and open time pending checks
    When I click the Time side menu tab for pending checks
    Then I should see the Select Employee title
    And I should see time employee filter controls
    And I should see time filter action buttons
    And I should see the Timesheets Pending Action title
    And I should see time records found text
    And I should see time table headers
    And I should see at least one pending timesheet record
    And I should see time row view actions
