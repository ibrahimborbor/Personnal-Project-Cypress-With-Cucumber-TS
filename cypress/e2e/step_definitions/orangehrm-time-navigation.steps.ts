import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";
import { loginPage } from "../../pages/LoginPage";
import { timePage } from "../../pages/TimePage";

type DemoUsersFixture = {
  demoAdmin: {
    username: string;
    password: string;
  };
};

const loginWithDemoAdmin = (): void => {
  cy.fixture("users").then((users: DemoUsersFixture) => {
    const username = Cypress.env("ORANGEHRM_USERNAME") || users.demoAdmin.username;
    const password = Cypress.env("ORANGEHRM_PASSWORD") || users.demoAdmin.password;

    loginPage.visit();
    loginPage.login(username, password);
  });
};

Given("I login and open time navigation checks", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});

When("I click the Time side menu tab", () => {
  dashboardPage.clickTimeTab();
});

Then("I should be on the Time module route", () => {
  timePage.assertOnTimeRoute();
});

Then("I should see the Time top breadcrumb", () => {
  timePage.assertTimeHeaderVisible();
});

Then("the Time side menu item should be active", () => {
  timePage.assertTimeMenuActive();
});

Given("I login and open time pending checks", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});

When("I click the Time side menu tab for pending checks", () => {
  dashboardPage.clickTimeTab();
  timePage.assertOnTimeRoute();
});

Then("I should see the Select Employee title", () => {
  timePage.assertSelectEmployeeTitleVisible();
});

Then("I should see time employee filter controls", () => {
  timePage.assertEmployeeFilterControlsVisible();
});

Then("I should see time filter action buttons", () => {
  timePage.assertFilterActionButtonsVisible();
});

Then("I should see the Timesheets Pending Action title", () => {
  timePage.assertPendingActionTitleVisible();
});

Then("I should see time records found text", () => {
  timePage.assertRecordsFoundVisible();
});

Then("I should see time table headers", () => {
  timePage.assertTableHeadersVisible();
});

Then("I should see at least one pending timesheet record", () => {
  timePage.assertAtLeastOnePendingRecordVisible();
});

Then("I should see time row view actions", () => {
  timePage.assertRowViewActionsVisible();
});
