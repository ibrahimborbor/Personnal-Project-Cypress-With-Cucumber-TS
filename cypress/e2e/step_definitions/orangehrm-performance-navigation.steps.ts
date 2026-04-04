import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";
import { loginPage } from "../../pages/LoginPage";
import { performancePage } from "../../pages/PerformancePage";

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

When("I open the Performance module", () => {
  dashboardPage.clickPerformanceTab();
  performancePage.assertOnPerformanceRoute();
});

Then("I should be on the Performance module route", () => {
  performancePage.assertOnPerformanceRoute();
});

Then("I should see the Performance top breadcrumb", () => {
  performancePage.assertPerformanceHeaderVisible();
});

Then("the Performance side menu item should be active", () => {
  performancePage.assertPerformanceMenuActive();
});

Then("I should see the Employee Reviews title", () => {
  performancePage.assertEmployeeReviewsTitleVisible();
});

Then("I should see performance filter fields", () => {
  performancePage.assertPerformanceFilterFieldsVisible();
});

Then("I should see performance filter action buttons", () => {
  performancePage.assertFilterActionButtonsVisible();
});

Then("I should see performance records found text", () => {
  performancePage.assertRecordsFoundVisible();
});

Then("I should see performance table headers", () => {
  performancePage.assertTableHeadersVisible();
});

Then("I should see performance results area", () => {
  performancePage.assertResultsAreaVisible();
});
