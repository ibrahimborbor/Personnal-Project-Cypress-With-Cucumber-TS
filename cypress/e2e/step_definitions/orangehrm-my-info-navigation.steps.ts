import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";
import { loginPage } from "../../pages/LoginPage";
import { myInfoPage } from "../../pages/MyInfoPage";

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

When("I open the My Info module", () => {
  dashboardPage.clickMyInfoTab();
  myInfoPage.assertOnMyInfoRoute();
});

Then("I should be on the My Info module route", () => {
  myInfoPage.assertOnMyInfoRoute();
});

Then("the My Info side menu item should be active", () => {
  myInfoPage.assertMyInfoMenuActive();
});

Then("I should see my info employee identity section", () => {
  myInfoPage.assertEmployeeIdentityVisible();
});

Then("I should see my info tabs list", () => {
  myInfoPage.assertPersonalDetailTabsVisible();
});

Then("I should see my info personal details form fields", () => {
  myInfoPage.assertPersonalDetailsSectionVisible();
});

Then("I should see my info custom fields section", () => {
  myInfoPage.assertCustomFieldsSectionVisible();
});

Then("I should see my info attachments section", () => {
  myInfoPage.assertAttachmentsSectionVisible();
});

Then("I should see my info attachment records found text", () => {
  myInfoPage.assertAttachmentRecordsFoundVisible();
});

Then("I should see my info attachment table headers", () => {
  myInfoPage.assertAttachmentTableHeadersVisible();
});

Then("I should see at least one my info attachment record", () => {
  myInfoPage.assertAtLeastOneAttachmentRecordVisible();
});

Then("I should see my info attachment row actions", () => {
  myInfoPage.assertAttachmentRowActionsVisible();
});
