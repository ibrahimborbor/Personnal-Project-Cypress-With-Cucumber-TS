export class LeavePage {
  private readonly selectors = {
    // Menu and page title anchors
    activeMenuItem: ".oxd-main-menu-item.active",
    leaveListTitle: "h5.oxd-table-filter-title",

    // Leave list filter controls
    dateInputs: ".oxd-date-input input.oxd-input",
    leaveStatusMultiselect: ".oxd-multiselect-wrapper .oxd-select-text",
    leaveStatusChip: ".oxd-multiselect-chips-selected",
    leaveTypeDropdown: ".oxd-select-wrapper .oxd-select-text",
    employeeNameInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    includePastEmployeesText: ".orangehrm-leave-filter-text",
    includePastEmployeesSwitch: ".oxd-switch-wrapper",

    // Filter action area
    resetButton: ".oxd-form-actions button[type='reset']",
    searchButton: ".oxd-form-actions button[type='submit']",
    requiredHint: ".orangehrm-form-hint",

    // Result table shell and row action menu
    recordsFoundText: ".orangehrm-header-container .oxd-text",
    tableHeader: ".oxd-table-header",
    tableCard: ".oxd-table-card",
    rowActionContainer: ".oxd-table-cell-actions",
    rowActionMenuIcon: ".bi-three-dots-vertical",
  };

  assertOnLeaveRoute(): void {
    cy.url().should("include", "/web/index.php/leave/viewLeaveList");
  }

  assertLeaveHeaderVisible(): void {
    cy.contains("h6", "Leave").should("be.visible");
  }

  assertLeaveMenuActive(): void {
    cy.get(this.selectors.activeMenuItem).contains("Leave").should("be.visible");
  }

  assertLeaveListTitleVisible(): void {
    cy.get(this.selectors.leaveListTitle).contains("Leave List").should("be.visible");
  }

  assertFilterFieldsVisible(): void {
    cy.contains("label", "From Date").should("be.visible");
    cy.contains("label", "To Date").should("be.visible");
    cy.contains("label", "Show Leave with Status").should("be.visible");
    cy.contains("label", "Leave Type").should("be.visible");
    cy.contains("label", "Employee Name").should("be.visible");
    cy.contains("label", "Sub Unit").should("be.visible");
    cy.get(this.selectors.includePastEmployeesText)
      .contains("Include Past Employees")
      .should("be.visible");

    cy.get(this.selectors.dateInputs).its("length").should("be.gte", 2);
    cy.get(this.selectors.leaveStatusMultiselect).first().should("contain.text", "-- Select --");
    cy.get(this.selectors.leaveStatusChip).should("contain.text", "Pending Approval");
    cy.get(this.selectors.leaveTypeDropdown).contains("-- Select --").should("be.visible");
    cy.get(this.selectors.employeeNameInput).should("be.visible");
    cy.get(this.selectors.leaveTypeDropdown).last().contains("-- Select --").should("be.visible");
    cy.get(this.selectors.includePastEmployeesSwitch).should("be.visible");
  }

  assertFilterActionButtonsVisible(): void {
    cy.get(this.selectors.requiredHint).contains("* Required").should("be.visible");
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
    cy.get(this.selectors.tableHeader).should("contain.text", "Date");
    cy.get(this.selectors.tableHeader).should("contain.text", "Employee Name");
    cy.get(this.selectors.tableHeader).should("contain.text", "Leave Type");
    cy.get(this.selectors.tableHeader).should("contain.text", "Leave Balance (Days)");
    cy.get(this.selectors.tableHeader).should("contain.text", "Number of Days");
    cy.get(this.selectors.tableHeader).should("contain.text", "Status");
    cy.get(this.selectors.tableHeader).should("contain.text", "Comments");
    cy.get(this.selectors.tableHeader).should("contain.text", "Actions");
  }

  assertAtLeastOneLeaveRecordVisible(): void {
    cy.get(this.selectors.tableCard).its("length").should("be.gte", 1);
  }

  assertRowActionsVisible(): void {
    cy.get(this.selectors.rowActionContainer).its("length").should("be.gte", 1);
    cy.get(this.selectors.rowActionMenuIcon).its("length").should("be.gte", 1);
  }
}

export const leavePage = new LeavePage();
