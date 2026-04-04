@dashboard @pim
Feature: OrangeHRM PIM module
  As a logged-in user
  I want to validate PIM navigation and Employee Information controls
  So I can trust the PIM module baseline UI

  Background:
    Given I am logged in on the OrangeHRM dashboard

  Scenario: Open PIM module from dashboard menu
    When I open the PIM module
    Then I should be on the PIM module route
    And I should see the PIM top breadcrumb
    And the PIM side menu item should be active

  Scenario: Verify PIM Employee Information filter and table controls
    When I open the PIM module
    Then I should see the Employee Information title
    And I should see pim filter fields
    And I should see pim filter action buttons
    And I should see the pim Add button
    And I should see pim records found text
    And I should see pim table headers
    And I should see at least one pim employee record
    And I should see pim row action icons
