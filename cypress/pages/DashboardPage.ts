export class DashboardPage {
  private readonly selectors = {
    sidePanel: ".oxd-sidepanel",
    sidePanelSearch: ".oxd-main-menu-search input[placeholder='Search']",
    activeMenuItem: ".oxd-main-menu-item.active",
    adminMenuItem: "ul.oxd-main-menu a.oxd-main-menu-item[href='/web/index.php/admin/viewAdminModule']",
    pimMenuItem: ".oxd-main-menu-item[href='/web/index.php/pim/viewPimModule']",
    leaveMenuItem: ".oxd-main-menu-item[href='/web/index.php/leave/viewLeaveModule']",
    topBar: ".oxd-topbar",
    helpButton: "button[title='Help']",
    upgradeButton: ".orangehrm-upgrade-button",
    userDropdownName: ".oxd-userdropdown-name",
    dashboardGrid: ".orangehrm-dashboard-grid",
    quickLaunchCard: ".orangehrm-quick-launch-card",
    buzzPostCard: ".orangehrm-buzz-widget-card",
  };

  assertOnDashboardRoute(): void {
    cy.url().should("include", "/web/index.php/dashboard/index");
  }

  assertShellVisible(): void {
    cy.get(this.selectors.topBar).should("be.visible");
    cy.get(this.selectors.sidePanel).should("be.visible");
    cy.get(this.selectors.dashboardGrid).should("be.visible");
  }

  assertDashboardHeaderVisible(): void {
    cy.contains("h6", "Dashboard").should("be.visible");
  }

  assertDashboardMenuActive(): void {
    cy.get(this.selectors.activeMenuItem).contains("Dashboard").should("be.visible");
  }

  assertSideMenuSearchVisible(): void {
    cy.get(this.selectors.sidePanelSearch).should("be.visible");
  }

  assertUserMenuVisible(): void {
    cy.get(".oxd-userdropdown-name").should("be.visible");
  }

  assertUserNameIsNotEmpty(): void {
    cy.get(this.selectors.userDropdownName)
      .invoke("text")
      .then((
        name) => {
        expect(name.trim().length).to.be.greaterThan(0);
      });
  }

  assertHelpButtonVisible(): void {
    cy.get(this.selectors.helpButton).should("be.visible");
  }

  assertUpgradeButtonVisible(): void {
    cy.get(this.selectors.upgradeButton).should("be.visible");
  }

  assertWidgetTitleVisible(title: string): void {
    cy.contains("p", title).should("be.visible");
  }

  assertQuickLaunchCardVisible(title: string): void {
    cy.get(this.selectors.quickLaunchCard).contains(title).should("be.visible");
  }

  assertQuickLaunchCardsAtLeast(minCount: number): void {
    cy.get(this.selectors.quickLaunchCard).its("length").should("be.gte", minCount);
  }

  assertAtLeastOneBuzzPostVisible(): void {
    cy.get(this.selectors.buzzPostCard).its("length").should("be.gte", 1);
  }

  clickAdminTab(): void {
    cy.get(this.selectors.adminMenuItem).click();
  }

  clickPimTab(): void {
    cy.get(this.selectors.pimMenuItem).contains("PIM").click();
  }

  clickLeaveTab(): void {
    cy.get(this.selectors.leaveMenuItem).contains("Leave").click();
  }
}

export const dashboardPage = new DashboardPage();
