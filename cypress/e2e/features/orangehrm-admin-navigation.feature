@dashboard @admin
Feature: OrangeHRM admin module
  As a logged-in user
  I want to validate Admin navigation and System Users screen controls
  So I can trust the Admin module baseline behavior

  Background:
    Given I am logged in on the OrangeHRM dashboard

  Scenario: Open Admin module from dashboard menu
    When I open the Admin module
    Then I should be on the Admin module route
    And I should see the Admin top breadcrumb
    And the Admin side menu item should be active

  Scenario: Verify System Users filter and table controls
    When I open the Admin module
    Then I should see the System Users title
    And I should see admin filter fields
    And I should see admin filter action buttons
    And I should see the admin Add button
    And I should see records found text
    And I should see admin users table headers
    And I should see at least one user record
    And I should see row action icons

  Scenario: Search system users by username role and status
    When I open the Admin module
    And I type "Admin" in the admin username filter
    And I select "Admin" as the admin user role filter
    And I select "Enabled" as the admin status filter
    And I click the admin search button
    Then I should see filtered admin records found
    And the first admin result should display the searched username

  Scenario: Search system users with no matching results
    When I open the Admin module
    And I type "zz_nonexistent_user" in the admin username filter
    And I click the admin search button
    Then I should see no admin records found message

  Scenario: Add a new system user via the add user form
    When I open the Admin module
    And I click the admin Add new user button
    Then I should see the Add User form title
    And I should see the add user form fields
    When I fill in the add user form details
    And I click save on the add user form
    Then the user is saved and I am back on the system users list

  Scenario: Delete the newly created system user
    When I open the Admin module
    And I type "CypressAuto" in the admin username filter
    And I click the admin search button
    Then I should see filtered admin records found
    When I click the delete icon for the first user record
    Then I should see the delete confirmation dialog
    When I confirm the user deletion
    Then the deleted user should not appear in the results
