@dashboard @myinfo
Feature: OrangeHRM My Info module
  As a logged-in user
  I want to validate My Info navigation and personal details sections
  So I can trust the My Info module baseline behavior

  Background:
    Given I am logged in on the OrangeHRM dashboard

  Scenario: Open My Info module from dashboard menu
    When I open the My Info module
    Then I should be on the My Info module route
    And the My Info side menu item should be active
    And I should see my info employee identity section
    And I should see my info tabs list

  Scenario: Verify Personal Details, Custom Fields, and Attachments shell
    When I open the My Info module
    Then I should see my info personal details form fields
    And I should see my info custom fields section
    And I should see my info attachments section
    And I should see my info attachment records found text
    And I should see my info attachment table headers
    And I should see at least one my info attachment record
    And I should see my info attachment row actions
