import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";
import { loginPage } from "../../pages/LoginPage";
import { recruitmentPage } from "../../pages/RecruitmentPage";

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

Given("I login and open recruitment navigation checks", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});

When("I click the Recruitment side menu tab", () => {
  dashboardPage.clickRecruitmentTab();
});

Then("I should be on the Recruitment module route", () => {
  recruitmentPage.assertOnRecruitmentRoute();
});

Then("I should see the Recruitment top breadcrumb", () => {
  recruitmentPage.assertRecruitmentHeaderVisible();
});

Then("the Recruitment side menu item should be active", () => {
  recruitmentPage.assertRecruitmentMenuActive();
});

Given("I login and open recruitment candidates checks", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});

When("I click the Recruitment side menu tab for candidates checks", () => {
  dashboardPage.clickRecruitmentTab();
  recruitmentPage.assertOnRecruitmentRoute();
});

Then("I should see the Candidates title", () => {
  recruitmentPage.assertCandidatesTitleVisible();
});

Then("I should see recruitment filter fields", () => {
  recruitmentPage.assertCandidateFilterFieldsVisible();
});

Then("I should see recruitment filter action buttons", () => {
  recruitmentPage.assertFilterActionButtonsVisible();
});

Then("I should see the recruitment Add button", () => {
  recruitmentPage.assertAddButtonVisible();
});

Then("I should see recruitment records found text", () => {
  recruitmentPage.assertRecordsFoundVisible();
});

Then("I should see recruitment table headers", () => {
  recruitmentPage.assertTableHeadersVisible();
});

Then("I should see at least one recruitment candidate record", () => {
  recruitmentPage.assertAtLeastOneCandidateRecordVisible();
});

Then("I should see recruitment row action icons", () => {
  recruitmentPage.assertRowActionIconsVisible();
});
