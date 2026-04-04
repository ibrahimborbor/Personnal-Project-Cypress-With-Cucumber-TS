export class DashboardPage {
  private readonly selectors = {
    // Global dashboard shell regions
    sidePanel: ".oxd-sidepanel",
    sidePanelSearch: ".oxd-main-menu-search input[placeholder='Search']",
    activeMenuItem: ".oxd-main-menu-item.active",

    // Left menu links for module navigation
    adminMenuItem: "ul.oxd-main-menu a.oxd-main-menu-item[href='/web/index.php/admin/viewAdminModule']",
    pimMenuItem: ".oxd-main-menu-item[href='/web/index.php/pim/viewPimModule']",
    leaveMenuItem: ".oxd-main-menu-item[href='/web/index.php/leave/viewLeaveModule']",
    timeMenuItem: ".oxd-main-menu-item[href='/web/index.php/time/viewTimeModule']",
    recruitmentMenuItem: ".oxd-main-menu-item[href='/web/index.php/recruitment/viewRecruitmentModule']",
    myInfoMenuItem: ".oxd-main-menu-item[href='/web/index.php/pim/viewMyDetails']",
    performanceMenuItem: ".oxd-main-menu-item[href='/web/index.php/performance/viewPerformanceModule']",
    directoryMenuItem: ".oxd-main-menu-item[href='/web/index.php/directory/viewDirectory']",
    claimMenuItem: ".oxd-main-menu-item[href='/web/index.php/claim/viewClaimModule']",

    // Top bar controls and user context
    topBar: ".oxd-topbar",
    helpButton: "button[title='Help']",
    upgradeButton: ".orangehrm-upgrade-button",
    userDropdownName: ".oxd-userdropdown-name",

    // Dashboard widgets/cards
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

  clickTimeTab(): void {
    cy.get(this.selectors.timeMenuItem).contains("Time").click();
  }

  clickRecruitmentTab(): void {
    cy.get(this.selectors.recruitmentMenuItem).contains("Recruitment").click();
  }

  clickMyInfoTab(): void {
    cy.get(this.selectors.myInfoMenuItem).contains("My Info").click();
  }

  clickPerformanceTab(): void {
    cy.get(this.selectors.performanceMenuItem).contains("Performance").click();
  }

  clickDirectoryTab(): void {
    cy.get(this.selectors.directoryMenuItem).contains("Directory").click();
  }

  clickClaimTab(): void {
    cy.get(this.selectors.claimMenuItem).contains("Claim").click();
  }
}

export const dashboardPage = new DashboardPage();
