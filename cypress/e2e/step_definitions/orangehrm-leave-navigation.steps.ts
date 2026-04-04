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

When("I open the Leave module", () => {
  dashboardPage.clickLeaveTab();
  leavePage.assertOnLeaveRoute();
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
