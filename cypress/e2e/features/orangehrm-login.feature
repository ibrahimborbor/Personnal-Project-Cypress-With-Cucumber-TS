@login
Feature: OrangeHRM login module
  As a QA learner
  I want to validate OrangeHRM login flows and UI states
  So I can trust both authentication behavior and login page structure

  @smoke
  Scenario: Login page renders expected elements
    Given I open the OrangeHRM login page for smoke checks
    Then I should see smoke username and password inputs
    And I should see smoke Login button

  @ui
  Scenario: Core login layout is present
    Given I open the OrangeHRM login page for DOM checks
    Then I should see the DOM login layout container
    And I should see the DOM Login heading
    And I should see DOM username and password inputs
    And I should see the DOM Login button
    And I should see a DOM csrf hidden token field

  @ui
  Scenario: Demo credentials and forgot password prompt are visible
    Given I open the OrangeHRM login page for DOM checks
    Then I should see DOM demo credentials for Admin
    And I should see DOM forgot password prompt

  @ui
  Scenario: Branding and logos are present
    Given I open the OrangeHRM login page for DOM checks
    Then I should see the DOM company branding image
    And I should see at least one DOM OrangeHRM logo image

  @validation
  Scenario: Required field errors appear when submitting empty form
    Given I open the OrangeHRM login page for validation checks
    When I submit the login form without credentials
    Then I should see validation required errors for username and password

  @validation @negative
  Scenario: Invalid credentials show authentication error
    Given I open the OrangeHRM login page for validation checks
    When I attempt validation login with username "bad-user" and password "wrong-pass"
    Then I should see validation invalid credentials error

  @auth @smoke
  Scenario: Demo admin can login successfully
    Given I open the OrangeHRM login page for success checks
    When I login with demo admin credentials from fixture
    Then I should land on the dashboard after login
    And I should see dashboard widgets header
    And I should see the logged-in user menu

  @auth @negative
  Scenario: Demo admin username with wrong password is denied
    Given I open the OrangeHRM login page for failed-login checks
    When I attempt failed login with demo username and wrong password
    Then I should remain on the login page after failed login
    And I should see failed-login invalid credentials message

  @footer
  Scenario: Social links are rendered with expected targets
    Given I open the OrangeHRM login page for footer checks
    Then footer social links should be configured as follows
      | platform | expectedHref                                           |
      | LinkedIn | https://www.linkedin.com/company/orangehrm/mycompany/ |
      | Facebook | https://www.facebook.com/OrangeHRM/                    |
      | Twitter  | https://twitter.com/orangehrm?lang=en                  |
      | YouTube  | https://www.youtube.com/c/OrangeHRMInc                 |

  @footer
  Scenario: Copyright block is present
    Given I open the OrangeHRM login page for footer checks
    Then I should see footer OrangeHRM OS version text
    And I should see footer OrangeHRM copyright text
