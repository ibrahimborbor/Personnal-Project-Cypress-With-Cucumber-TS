@dashboard @directory
Feature: OrangeHRM directory module
  As a logged-in user
  I want to validate Directory navigation and people search controls
  So I can trust the Directory module baseline behavior

  Background:
    Given I am logged in on the OrangeHRM dashboard

  Scenario: Open Directory module from dashboard menu
    When I open the Directory module
    Then I should be on the Directory module route
    And I should see the Directory top breadcrumb
    And the Directory side menu item should be active

  Scenario: Verify Directory filter and cards controls
    When I open the Directory module
    Then I should see the Directory title
    And I should see directory filter fields
    And I should see directory filter action buttons
    And I should see directory records found text
    And I should see at least one directory card
    And I should see directory card core elements
