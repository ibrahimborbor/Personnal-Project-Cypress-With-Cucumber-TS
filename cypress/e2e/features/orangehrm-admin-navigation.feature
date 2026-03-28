@dashboard @admin
Feature: OrangeHRM admin module
  As a logged-in user
  I want to validate Admin navigation and System Users screen controls
  So I can trust the Admin module baseline behavior

  Scenario: Open Admin module from dashboard menu
    Given I login and open admin navigation checks
    When I click the Admin side menu tab
    Then I should be on the Admin module route
    And I should see the Admin top breadcrumb
    And the Admin side menu item should be active

  Scenario: Verify System Users filter and table controls
    Given I login and open admin system users checks
    When I click the Admin side menu tab for system users checks
    Then I should see the System Users title
    And I should see admin filter fields
    And I should see admin filter action buttons
    And I should see the admin Add button
    And I should see records found text
    And I should see admin users table headers
    And I should see at least one user record
    And I should see row action icons
