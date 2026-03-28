import {
  DataTable,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";
import { loginPage } from "../../pages/LoginPage";

type DemoUsersFixture = {
  demoAdmin: {
    username: string;
    password: string;
  };
};

Given("I open the OrangeHRM login page for smoke checks", () => {
  loginPage.visit();
});

Then("I should see smoke username and password inputs", () => {
  loginPage.assertInputsVisible();
});

Then("I should see smoke Login button", () => {
  loginPage.assertLoginButtonVisible();
});

Given("I open the OrangeHRM login page for DOM checks", () => {
  loginPage.visit();
});

Then("I should see the DOM login layout container", () => {
  loginPage.assertLayoutVisible();
});

Then("I should see the DOM Login heading", () => {
  loginPage.assertHeadingVisible();
});

Then("I should see DOM username and password inputs", () => {
  loginPage.assertInputsVisible();
});

Then("I should see the DOM Login button", () => {
  loginPage.assertLoginButtonVisible();
});

Then("I should see a DOM csrf hidden token field", () => {
  loginPage.assertCsrfTokenExists();
});

Then("I should see DOM demo credentials for Admin", () => {
  loginPage.assertDemoCredentialsVisible();
});

Then("I should see DOM forgot password prompt", () => {
  loginPage.assertForgotPasswordVisible();
});

Then("I should see the DOM company branding image", () => {
  loginPage.assertBrandingImageVisible();
});

Then("I should see at least one DOM OrangeHRM logo image", () => {
  loginPage.assertLogoVisible();
});

Given("I open the OrangeHRM login page for validation checks", () => {
  loginPage.visit();
});

When("I submit the login form without credentials", () => {
  loginPage.submit();
});

Then("I should see validation required errors for username and password", () => {
  loginPage.assertRequiredFieldErrors(2);
});

When(
  "I attempt validation login with username {string} and password {string}",
  (username: string, password: string) => {
    loginPage.login(username, password);
  },
);

Then("I should see validation invalid credentials error", () => {
  loginPage.assertInvalidCredentialsVisible();
});

Given("I open the OrangeHRM login page for success checks", () => {
  loginPage.visit();
});

When("I login with demo admin credentials from fixture", () => {
  cy.fixture("users").then((users: DemoUsersFixture) => {
    const username = Cypress.env("ORANGEHRM_USERNAME") || users.demoAdmin.username;
    const password = Cypress.env("ORANGEHRM_PASSWORD") || users.demoAdmin.password;

    loginPage.login(username, password);
  });
});

Then("I should land on the dashboard after login", () => {
  dashboardPage.assertOnDashboardRoute();
});

Then("I should see dashboard widgets header", () => {
  dashboardPage.assertDashboardHeaderVisible();
});

Then("I should see the logged-in user menu", () => {
  dashboardPage.assertUserMenuVisible();
});

Given("I open the OrangeHRM login page for failed-login checks", () => {
  loginPage.visit();
});

When("I attempt failed login with demo username and wrong password", () => {
  cy.fixture("users").then((users: DemoUsersFixture) => {
    loginPage.login(users.demoAdmin.username, "wrong-admin123");
  });
});

Then("I should remain on the login page after failed login", () => {
  loginPage.assertOnLoginRoute();
});

Then("I should see failed-login invalid credentials message", () => {
  loginPage.assertInvalidCredentialsVisible();
});

Given("I open the OrangeHRM login page for footer checks", () => {
  loginPage.visit();
});

Then("footer social links should be configured as follows", (table: DataTable) => {
  table.hashes().forEach((row) => {
    loginPage.assertSocialLinkExists(row.expectedHref);
  });
});

Then("I should see footer OrangeHRM OS version text", () => {
  loginPage.assertVersionTextVisible();
});

Then("I should see footer OrangeHRM copyright text", () => {
  loginPage.assertCopyrightTextVisible();
});
