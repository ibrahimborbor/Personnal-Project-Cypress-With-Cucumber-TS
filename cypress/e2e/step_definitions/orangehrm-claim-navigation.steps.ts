import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { claimPage } from "../../pages/ClaimPage";
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

When("I open the Claim module", () => {
  dashboardPage.clickClaimTab();
  claimPage.assertOnClaimRoute();
});

Then("I should be on the Claim module route", () => {
  claimPage.assertOnClaimRoute();
});

Then("I should see the Claim top breadcrumb", () => {
  claimPage.assertClaimHeaderVisible();
});

Then("the Claim side menu item should be active", () => {
  claimPage.assertClaimMenuActive();
});

Then("I should see the Employee Claims title", () => {
  claimPage.assertEmployeeClaimsTitleVisible();
});

Then("I should see claim filter fields", () => {
  claimPage.assertClaimFilterFieldsVisible();
});

Then("I should see claim filter action buttons", () => {
  claimPage.assertClaimFilterActionButtonsVisible();
});

Then("I should see the Assign Claim button", () => {
  claimPage.assertAssignClaimButtonVisible();
});

Then("I should see claim records found text", () => {
  claimPage.assertRecordsFoundVisible();
});

Then("I should see claim table headers", () => {
  claimPage.assertClaimTableHeadersVisible();
});

Then("I should see at least one claim record", () => {
  claimPage.assertAtLeastOneClaimRecordVisible();
});

Then("I should see claim row action button", () => {
  claimPage.assertClaimRowActionVisible();
});
