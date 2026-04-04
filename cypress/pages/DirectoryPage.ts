export class DirectoryPage {
  private readonly selectors = {
    // Left menu active state anchor
    activeDirectoryMenuItem:
      "ul.oxd-main-menu a.oxd-main-menu-item.active[href='/web/index.php/directory/viewDirectory']",

    // Directory search filters
    employeeNameInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    selectDropdown: ".oxd-select-wrapper .oxd-select-text",
    resetButton: ".oxd-form-actions button[type='reset']",
    searchButton: ".oxd-form-actions button[type='submit']",

    // Result summary and card list
    recordsFoundText: ".orangehrm-corporate-directory .orangehrm-vertical-padding .oxd-text--span",
    directoryCard: ".orangehrm-directory-card",
    profileImage: ".orangehrm-profile-picture-img[alt='Profile Picture']",
    cardHeader: ".orangehrm-directory-card-header",
  };

  assertOnDirectoryRoute(): void {
    cy.url().should("include", "/web/index.php/directory/viewDirectory");
  }

  assertDirectoryHeaderVisible(): void {
    cy.contains("h6", "Directory").should("be.visible");
  }

  assertDirectoryMenuActive(): void {
    cy.get(this.selectors.activeDirectoryMenuItem).should("be.visible");
  }

  assertDirectoryTitleVisible(): void {
    cy.get("h5.oxd-table-filter-title").contains("Directory").should("be.visible");
  }

  assertDirectoryFilterFieldsVisible(): void {
    cy.contains("label", "Employee Name").should("be.visible");
    cy.contains("label", "Job Title").should("be.visible");
    cy.contains("label", "Location").should("be.visible");

    cy.get(this.selectors.employeeNameInput).should("be.visible");
    cy.get(this.selectors.selectDropdown).its("length").should("be.gte", 2);
    cy.get(this.selectors.selectDropdown).should("contain.text", "-- Select --");
  }

  assertFilterActionButtonsVisible(): void {
    cy.get(this.selectors.resetButton).contains("Reset").should("be.visible");
    cy.get(this.selectors.searchButton).contains("Search").should("be.visible");
  }

  assertRecordsFoundVisible(): void {
    cy.get(this.selectors.recordsFoundText)
      .invoke("text")
      .then((text) => {
        const normalizedText = text.trim();

        expect(normalizedText).to.match(/^(No\s+Records?\s+Found|\(\d+\)\s*Record[s]?\s*Found)$/i);
      });
  }

  assertAtLeastOneDirectoryCardVisible(): void {
    cy.get(this.selectors.directoryCard).its("length").should("be.gte", 1);
  }

  assertDirectoryCardCoreElementsVisible(): void {
    cy.get(this.selectors.cardHeader).its("length").should("be.gte", 1);
    cy.get(this.selectors.profileImage).its("length").should("be.gte", 1);
  }
}

export const directoryPage = new DirectoryPage();
