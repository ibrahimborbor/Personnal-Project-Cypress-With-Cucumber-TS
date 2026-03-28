import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";
import { leavePage } from "../../pages/LeavePage";
import { loginPage } from "../../pages/LoginPage";

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

Given("I login and open leave navigation checks", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});

When("I click the Leave side menu tab", () => {
  dashboardPage.clickLeaveTab();
});

Then("I should be on the Leave module route", () => {
  leavePage.assertOnLeaveRoute();
});

Then("I should see the Leave top breadcrumb", () => {
  leavePage.assertLeaveHeaderVisible();
});

Then("the Leave side menu item should be active", () => {
  leavePage.assertLeaveMenuActive();
});

Given("I login and open leave list checks", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});

When("I click the Leave side menu tab for leave list checks", () => {
  dashboardPage.clickLeaveTab();
  leavePage.assertOnLeaveRoute();
});

Then("I should see the Leave List title", () => {
  leavePage.assertLeaveListTitleVisible();
});

Then("I should see leave filter fields", () => {
  leavePage.assertFilterFieldsVisible();
});

Then("I should see leave filter action buttons", () => {
  leavePage.assertFilterActionButtonsVisible();
});

Then("I should see leave records found text", () => {
  leavePage.assertRecordsFoundVisible();
});

Then("I should see leave table headers", () => {
  leavePage.assertTableHeadersVisible();
});

Then("I should see at least one leave record", () => {
  leavePage.assertAtLeastOneLeaveRecordVisible();
});

Then("I should see leave row actions", () => {
  leavePage.assertRowActionsVisible();
});
