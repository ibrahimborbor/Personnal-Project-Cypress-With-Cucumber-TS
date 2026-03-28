import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { adminPage } from "../../pages/AdminPage";
import { dashboardPage } from "../../pages/DashboardPage";
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

Given("I login and open admin navigation checks", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});

When("I click the Admin side menu tab", () => {
  dashboardPage.clickAdminTab();
});

Then("I should be on the Admin module route", () => {
  adminPage.assertOnAdminRoute();
});

Then("I should see the Admin top breadcrumb", () => {
  adminPage.assertAdminHeaderVisible();
});

Then("the Admin side menu item should be active", () => {
  adminPage.assertAdminMenuActive();
});

Given("I login and open admin system users checks", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});

When("I click the Admin side menu tab for system users checks", () => {
  dashboardPage.clickAdminTab();
  adminPage.assertOnAdminRoute();
});

Then("I should see the System Users title", () => {
  adminPage.assertSystemUsersTitleVisible();
});

Then("I should see admin filter fields", () => {
  adminPage.assertFilterFieldsVisible();
});

Then("I should see admin filter action buttons", () => {
  adminPage.assertFilterActionButtonsVisible();
});

Then("I should see the admin Add button", () => {
  adminPage.assertAddButtonVisible();
});

Then("I should see records found text", () => {
  adminPage.assertRecordsFoundVisible();
});

Then("I should see admin users table headers", () => {
  adminPage.assertTableHeadersVisible();
});

Then("I should see at least one user record", () => {
  adminPage.assertAtLeastOneUserRecordVisible();
});

Then("I should see row action icons", () => {
  adminPage.assertRowActionIconsVisible();
});
