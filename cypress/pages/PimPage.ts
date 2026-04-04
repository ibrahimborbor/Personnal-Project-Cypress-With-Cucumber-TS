export class PimPage {
  private readonly selectors = {
    // Menu/title anchors for Employee List page
    activeMenuItem: ".oxd-main-menu-item.active",
    employeeInfoTitle: "h5.oxd-table-filter-title",

    // PIM filter controls
    employeeNameInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    employeeIdInput: ".oxd-form .oxd-input",
    selectInputs: ".oxd-form .oxd-select-text",

    // Filter actions and primary page action
    resetButton: ".oxd-form-actions button[type='reset']",
    searchButton: ".oxd-form-actions button[type='submit']",
    addButton: ".orangehrm-header-container button",

    // Employee list table shell and row actions
    recordsFoundText: ".orangehrm-horizontal-padding .oxd-text",
    tableHeader: ".oxd-table-header",
    tableCard: ".oxd-table-card",
    rowActionContainer: ".oxd-table-cell-actions",
    editIcon: ".bi-pencil-fill",
    deleteIcon: ".bi-trash",
  };

  assertOnPimRoute(): void {
    cy.url().should("include", "/web/index.php/pim/viewEmployeeList");
  }

  assertPimHeaderVisible(): void {
    cy.contains("h6", "PIM").should("be.visible");
  }

  assertPimMenuActive(): void {
    cy.get(this.selectors.activeMenuItem).contains("PIM").should("be.visible");
  }

  assertEmployeeInformationTitleVisible(): void {
    cy.get(this.selectors.employeeInfoTitle)
      .contains("Employee Information")
      .should("be.visible");
  }

  assertFilterFieldsVisible(): void {
    cy.contains("label", "Employee Name").should("be.visible");
    cy.contains("label", "Employee Id").should("be.visible");
    cy.contains("label", "Employment Status").should("be.visible");
    cy.contains("label", "Include").should("be.visible");
    cy.contains("label", "Supervisor Name").should("be.visible");
    cy.contains("label", "Job Title").should("be.visible");
    cy.contains("label", "Sub Unit").should("be.visible");

    cy.get(this.selectors.employeeNameInput).first().should("be.visible");
    cy.get(this.selectors.employeeIdInput).first().should("be.visible");
    cy.get(this.selectors.employeeNameInput).eq(1).should("be.visible");

    cy.get(this.selectors.selectInputs).should("contain.text", "-- Select --");
    cy.get(this.selectors.selectInputs).should("contain.text", "Current Employees Only");
  }

  assertFilterActionButtonsVisible(): void {
    cy.get(this.selectors.resetButton).contains("Reset").should("be.visible");
    cy.get(this.selectors.searchButton).contains("Search").should("be.visible");
  }

  assertAddButtonVisible(): void {
    cy.get(this.selectors.addButton).contains("Add").should("be.visible");
  }

  assertRecordsFoundVisible(): void {
    cy.get(this.selectors.recordsFoundText)
      .invoke("text")
      .then((text) => {
        expect(text).to.match(/\(\d+\)\s*Records Found/i);
      });
  }

  assertTableHeadersVisible(): void {
    cy.get(this.selectors.tableHeader).should("contain.text", "Id");
    cy.get(this.selectors.tableHeader).should("contain.text", "First (& Middle) Name");
    cy.get(this.selectors.tableHeader).should("contain.text", "Last Name");
    cy.get(this.selectors.tableHeader).should("contain.text", "Job Title");
    cy.get(this.selectors.tableHeader).should("contain.text", "Employment Status");
    cy.get(this.selectors.tableHeader).should("contain.text", "Sub Unit");
    cy.get(this.selectors.tableHeader).should("contain.text", "Supervisor");
    cy.get(this.selectors.tableHeader).should("contain.text", "Actions");
  }

  assertAtLeastOneEmployeeRecordVisible(): void {
    cy.get(this.selectors.tableCard).its("length").should("be.gte", 1);
  }

  assertRowActionIconsVisible(): void {
    cy.get(this.selectors.rowActionContainer).its("length").should("be.gte", 1);
    cy.get(this.selectors.editIcon).its("length").should("be.gte", 1);
    cy.get(this.selectors.deleteIcon).its("length").should("be.gte", 1);
  }
}

export const pimPage = new PimPage();
