@dashboard @smoke
Feature: OrangeHRM dashboard module
  As a logged-in user
  I want to validate dashboard shell, user area, and widgets
  So I know core dashboard functionality is healthy

  Scenario: Dashboard shell renders after login
    Given I login and open dashboard shell checks
    Then I should be on the dashboard route for shell checks
    And I should see dashboard shell containers
    And I should see the dashboard breadcrumb header for shell checks
    And I should see dashboard left menu active state
    And I should see the side menu search input

  Scenario: User area controls are visible
    Given I login and open dashboard user-area checks
    Then I should be on the dashboard route for user-area checks
    And I should see dashboard user menu for user-area checks
    And I should see a non-empty user name in the top bar
    And I should see the help icon button
    And I should see the upgrade button

  Scenario: Core dashboard widgets are visible
    Given I login and open dashboard widget checks
    Then I should be on the dashboard route for widget checks
    And I should see the Time at Work widget title
    And I should see the My Actions widget title
    And I should see the Quick Launch widget title
    And I should see the Buzz Latest Posts widget title
    And I should see employee distribution widget titles
    And I should see at least five quick launch cards
    And I should see at least one buzz post card
