@dashboard @recruitment
Feature: OrangeHRM recruitment module
  As a logged-in user
  I want to validate Recruitment navigation and candidate list controls
  So I can trust the Recruitment module baseline behavior

  Scenario: Open Recruitment module from dashboard menu
    Given I login and open recruitment navigation checks
    When I click the Recruitment side menu tab
    Then I should be on the Recruitment module route
    And I should see the Recruitment top breadcrumb
    And the Recruitment side menu item should be active

  Scenario: Verify Candidates filter and table controls
    Given I login and open recruitment candidates checks
    When I click the Recruitment side menu tab for candidates checks
    Then I should see the Candidates title
    And I should see recruitment filter fields
    And I should see recruitment filter action buttons
    And I should see the recruitment Add button
    And I should see recruitment records found text
    And I should see recruitment table headers
    And I should see at least one recruitment candidate record
    And I should see recruitment row action icons
