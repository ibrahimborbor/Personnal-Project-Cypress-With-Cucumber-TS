export class ClaimPage {
  private readonly selectors = {
    // Menu anchor and claim page route marker
    activeClaimMenuItem:
      "ul.oxd-main-menu a.oxd-main-menu-item.active[href*='/web/index.php/claim/']",

    // Employee Claims filter controls
    autocompleteInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    selectDropdown: ".oxd-select-wrapper .oxd-select-text",
    dateInput: ".oxd-date-input input.oxd-input",
    resetButton: ".oxd-form-actions .oxd-button--ghost",
    searchButton: ".oxd-form-actions button[type='submit']",
    assignClaimButton: ".orangehrm-header-container button",

    // Results summary and table shell
    recordsFoundText: ".orangehrm-paper-container .orangehrm-vertical-padding .oxd-text--span",
    tableHeader: ".oxd-table-header",
    tableCard: ".oxd-table-card",
    rowActionButton: ".oxd-table-cell-actions button",
  };

  assertOnClaimRoute(): void {
    cy.url().should("include", "/web/index.php/claim/");
  }

  assertClaimHeaderVisible(): void {
    cy.contains("h6", "Claim").should("be.visible");
  }

  assertClaimMenuActive(): void {
    cy.get(this.selectors.activeClaimMenuItem).should("be.visible");
  }

  assertEmployeeClaimsTitleVisible(): void {
    cy.get("h5.oxd-table-filter-title").contains("Employee Claims").should("be.visible");
  }

  assertClaimFilterFieldsVisible(): void {
    cy.contains("label", "Employee Name").should("be.visible");
    cy.contains("label", "Reference Id").should("be.visible");
    cy.contains("label", "Event Name").should("be.visible");
    cy.contains("label", "Status").should("be.visible");
    cy.contains("label", "From Date").should("be.visible");
    cy.contains("label", "To Date").should("be.visible");
    cy.contains("label", "Include").should("be.visible");

    cy.get(this.selectors.autocompleteInput).its("length").should("be.gte", 2);
    cy.get(this.selectors.selectDropdown).its("length").should("be.gte", 3);
    cy.get(this.selectors.selectDropdown).should("contain.text", "Current Employees Only");
    cy.get(this.selectors.dateInput).its("length").should("be.gte", 2);
  }

  assertClaimFilterActionButtonsVisible(): void {
    cy.get(this.selectors.resetButton).contains("Reset").should("be.visible");
    cy.get(this.selectors.searchButton).contains("Search").should("be.visible");
  }

  assertAssignClaimButtonVisible(): void {
    cy.get(this.selectors.assignClaimButton).contains("Assign Claim").should("be.visible");
  }

  assertRecordsFoundVisible(): void {
    cy.get(this.selectors.recordsFoundText)
      .invoke("text")
      .then((text) => {
        const normalizedText = text.trim();

        expect(normalizedText).to.match(/^(No\s+Records?\s+Found|\(\d+\)\s*Record[s]?\s*Found)$/i);
      });
  }

  assertClaimTableHeadersVisible(): void {
    cy.get(this.selectors.tableHeader).should("contain.text", "Reference Id");
    cy.get(this.selectors.tableHeader).should("contain.text", "Employee Name");
    cy.get(this.selectors.tableHeader).should("contain.text", "Event Name");
    cy.get(this.selectors.tableHeader).should("contain.text", "Description");
    cy.get(this.selectors.tableHeader).should("contain.text", "Currency");
    cy.get(this.selectors.tableHeader).should("contain.text", "Submitted Date");
    cy.get(this.selectors.tableHeader).should("contain.text", "Status");
    cy.get(this.selectors.tableHeader).should("contain.text", "Amount");
    cy.get(this.selectors.tableHeader).should("contain.text", "Actions");
  }

  assertAtLeastOneClaimRecordVisible(): void {
    cy.get(this.selectors.tableCard).its("length").should("be.gte", 1);
  }

  assertClaimRowActionVisible(): void {
    cy.get(this.selectors.rowActionButton).first().contains("View Details").should("be.visible");
  }
}

export const claimPage = new ClaimPage();
