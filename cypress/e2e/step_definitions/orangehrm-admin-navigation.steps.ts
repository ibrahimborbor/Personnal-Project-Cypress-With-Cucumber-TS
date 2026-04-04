import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { adminPage } from "../../pages/AdminPage";
import { dashboardPage } from "../../pages/DashboardPage";

When("I open the Admin module", () => {
  dashboardPage.clickAdminTab();
  adminPage.assertOnAdminRoute();
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

When("I type {string} in the admin username filter", (username: string) => {
  adminPage.typeUsernameFilter(username);
});

When("I select {string} as the admin user role filter", (role: string) => {
  adminPage.selectUserRoleFilter(role);
});

When("I select {string} as the admin status filter", (status: string) => {
  adminPage.selectStatusFilter(status);
});

When("I click the admin search button", () => {
  adminPage.clickFilterSearchButton();
});

Then("I should see filtered admin records found", () => {
  adminPage.assertFilteredRecordsFound();
});

Then("the first admin result should display the searched username", () => {
  adminPage.assertFirstResultContainsUsername("Admin");
});

Then("I should see no admin records found message", () => {
  adminPage.assertNoRecordsFound();
});

When("I click the admin Add new user button", () => {
  adminPage.navigateToAddUser();
});

Then("I should see the Add User form title", () => {
  adminPage.assertAddUserFormTitleVisible();
});

Then("I should see the add user form fields", () => {
  adminPage.assertAddUserFormFieldsVisible();
});

When("I fill in the add user form details", () => {
  adminPage.fillAddUserForm();
});

When("I click save on the add user form", () => {
  adminPage.submitAddUserForm();
});

Then("the user is saved and I am back on the system users list", () => {
  adminPage.assertUserSavedSuccessfully();
});

When("I click the delete icon for the first user record", () => {
  adminPage.clickDeleteIconOnFirstRow();
});

Then("I should see the delete confirmation dialog", () => {
  adminPage.assertDeleteConfirmDialogVisible();
});

When("I confirm the user deletion", () => {
  adminPage.confirmDelete();
});

Then("the deleted user should not appear in the results", () => {
  adminPage.assertDeletedUserNotInTable();
});
