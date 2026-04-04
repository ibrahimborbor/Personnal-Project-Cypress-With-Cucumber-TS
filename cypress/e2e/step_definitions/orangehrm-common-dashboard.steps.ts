import { Given } from "@badeball/cypress-cucumber-preprocessor";
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

Given("I am logged in on the OrangeHRM dashboard", () => {
  loginWithDemoAdmin();
  dashboardPage.assertOnDashboardRoute();
});