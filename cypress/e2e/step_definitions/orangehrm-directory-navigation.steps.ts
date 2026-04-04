import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";
import { directoryPage } from "../../pages/DirectoryPage";
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

When("I open the Directory module", () => {
  dashboardPage.clickDirectoryTab();
  directoryPage.assertOnDirectoryRoute();
});

Then("I should be on the Directory module route", () => {
  directoryPage.assertOnDirectoryRoute();
});

Then("I should see the Directory top breadcrumb", () => {
  directoryPage.assertDirectoryHeaderVisible();
});

Then("the Directory side menu item should be active", () => {
  directoryPage.assertDirectoryMenuActive();
});

Then("I should see the Directory title", () => {
  directoryPage.assertDirectoryTitleVisible();
});

Then("I should see directory filter fields", () => {
  directoryPage.assertDirectoryFilterFieldsVisible();
});

Then("I should see directory filter action buttons", () => {
  directoryPage.assertFilterActionButtonsVisible();
});

Then("I should see directory records found text", () => {
  directoryPage.assertRecordsFoundVisible();
});

Then("I should see at least one directory card", () => {
  directoryPage.assertAtLeastOneDirectoryCardVisible();
});

Then("I should see directory card core elements", () => {
  directoryPage.assertDirectoryCardCoreElementsVisible();
});
