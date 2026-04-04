export class PerformancePage {
  private readonly selectors = {
    // Menu active state and filter panel root
    activePerformanceMenuItem:
      "ul.oxd-main-menu a.oxd-main-menu-item.active[href*='/web/index.php/performance/']",
    filterArea: ".oxd-table-filter-area",

    // Employee Reviews filter controls
    employeeNameInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    selectDropdown: ".oxd-select-wrapper .oxd-select-text",
    dateInput: ".oxd-date-input input.oxd-input",
    resetButton: ".oxd-form-actions button[type='reset']",
    searchButton: ".oxd-form-actions button[type='submit']",

    // Results counter and table shell
    recordsFoundText: ".orangehrm-paper-container .orangehrm-vertical-padding .oxd-text--span",
    tableHeader: ".oxd-table-header",
    tableBody: ".oxd-table-body",
  };

  assertOnPerformanceRoute(): void {
    cy.url().should("include", "/web/index.php/performance/");
  }

  assertPerformanceHeaderVisible(): void {
    cy.contains("h6", "Performance").should("be.visible");
  }

  assertPerformanceMenuActive(): void {
    cy.get(this.selectors.activePerformanceMenuItem).should("be.visible");
  }

  assertEmployeeReviewsTitleVisible(): void {
    cy.get("h5.oxd-table-filter-title").contains("Employee Reviews").should("be.visible");
  }

  assertPerformanceFilterFieldsVisible(): void {
    cy.get(this.selectors.filterArea).should("be.visible").within(() => {
      cy.contains("label", "Employee Name").should("be.visible");
      cy.contains("label", "Job Title").should("be.visible");
      cy.contains("label", "Sub Unit").should("be.visible");
      cy.contains("label", "Include").should("be.visible");
      cy.contains("label", "Review Status").should("be.visible");
      cy.contains("label", "From Date").should("be.visible");
      cy.contains("label", "To Date").should("be.visible");

      cy.get(this.selectors.employeeNameInput).should("be.visible");
      cy.get(this.selectors.selectDropdown).its("length").should("be.gte", 4);
      cy.contains(this.selectors.selectDropdown, "Current Employees Only").should("be.visible");
      cy.get(this.selectors.dateInput).its("length").should("be.gte", 2);
    });
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

  assertTableHeadersVisible(): void {
    cy.get(this.selectors.tableHeader).should("contain.text", "Employee");
    cy.get(this.selectors.tableHeader).should("contain.text", "Job Title");
    cy.get(this.selectors.tableHeader).should("contain.text", "Sub Unit");
    cy.get(this.selectors.tableHeader).should("contain.text", "Review Period");
    cy.get(this.selectors.tableHeader).should("contain.text", "Due Date");
    cy.get(this.selectors.tableHeader).should("contain.text", "Review Status");
    cy.get(this.selectors.tableHeader).should("contain.text", "Actions");
  }

  assertResultsAreaVisible(): void {
    cy.get(this.selectors.tableBody).should("exist");
  }
}

export const performancePage = new PerformancePage();
