/// <reference types="cypress" />

declare const cy: any;
declare const Cypress: {
  env: (name: string) => string | undefined;
};

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";
import { loginPage } from "../../pages/LoginPage";
import { pimPage } from "../../pages/PimPage";

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

When("I open the PIM module", () => {
  dashboardPage.clickPimTab();
  pimPage.assertOnPimRoute();
});

Then("I should be on the PIM module route", () => {
  pimPage.assertOnPimRoute();
});

Then("I should see the PIM top breadcrumb", () => {
  pimPage.assertPimHeaderVisible();
});

Then("the PIM side menu item should be active", () => {
  pimPage.assertPimMenuActive();
});

Then("I should see the Employee Information title", () => {
  pimPage.assertEmployeeInformationTitleVisible();
});

Then("I should see pim filter fields", () => {
  pimPage.assertFilterFieldsVisible();
});

Then("I should see pim filter action buttons", () => {
  pimPage.assertFilterActionButtonsVisible();
});

Then("I should see the pim Add button", () => {
  pimPage.assertAddButtonVisible();
});

Then("I should see pim records found text", () => {
  pimPage.assertRecordsFoundVisible();
});

Then("I should see pim table headers", () => {
  pimPage.assertTableHeadersVisible();
});

Then("I should see at least one pim employee record", () => {
  pimPage.assertAtLeastOneEmployeeRecordVisible();
});

Then("I should see pim row action icons", () => {
  pimPage.assertRowActionIconsVisible();
});
