import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "../../pages/DashboardPage";

Then("I should be on the OrangeHRM dashboard", () => {
  dashboardPage.assertOnDashboardRoute();
});

Then("I should see dashboard shell containers", () => {
  dashboardPage.assertShellVisible();
});

Then("I should see the dashboard breadcrumb header for shell checks", () => {
  dashboardPage.assertDashboardHeaderVisible();
});

Then("I should see dashboard left menu active state", () => {
  dashboardPage.assertDashboardMenuActive();
});

Then("I should see the side menu search input", () => {
  dashboardPage.assertSideMenuSearchVisible();
});

Then("I should see dashboard user menu for user-area checks", () => {
  dashboardPage.assertUserMenuVisible();
});

Then("I should see a non-empty user name in the top bar", () => {
  dashboardPage.assertUserNameIsNotEmpty();
});

Then("I should see the help icon button", () => {
  dashboardPage.assertHelpButtonVisible();
});

Then("I should see the upgrade button", () => {
  dashboardPage.assertUpgradeButtonVisible();
});

Then("I should see the Time at Work widget title", () => {
  dashboardPage.assertWidgetTitleVisible("Time at Work");
});

Then("I should see the My Actions widget title", () => {
  dashboardPage.assertWidgetTitleVisible("My Actions");
});

Then("I should see the Quick Launch widget title", () => {
  dashboardPage.assertWidgetTitleVisible("Quick Launch");
});

Then("I should see the Buzz Latest Posts widget title", () => {
  dashboardPage.assertWidgetTitleVisible("Buzz Latest Posts");
});

Then("I should see employee distribution widget titles", () => {
  dashboardPage.assertWidgetTitleVisible("Employee Distribution by Sub Unit");
  dashboardPage.assertWidgetTitleVisible("Employee Distribution by Location");
});

Then("I should see at least five quick launch cards", () => {
  dashboardPage.assertQuickLaunchCardsAtLeast(5);
  dashboardPage.assertQuickLaunchCardVisible("Assign Leave");
  dashboardPage.assertQuickLaunchCardVisible("Leave List");
});

Then("I should see at least one buzz post card", () => {
  dashboardPage.assertAtLeastOneBuzzPostVisible();
});
