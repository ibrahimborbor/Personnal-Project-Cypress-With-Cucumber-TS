export class TimePage {
  private readonly selectors = {
    activeTimeMenuItem:
      "ul.oxd-main-menu a.oxd-main-menu-item.active[href='/web/index.php/time/viewTimeModule']",
    employeeNameInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    requiredHint: ".orangehrm-form-hint",
    viewButton: ".oxd-form-actions button[type='submit']",
    recordsFoundText: ".orangehrm-vertical-padding .oxd-text",
    tableHeader: ".oxd-table-header",
    tableCard: ".oxd-table-card",
    rowActionContainer: ".oxd-table-cell-actions",
    rowViewButton: ".oxd-table-cell-actions button",
  };

  assertOnTimeRoute(): void {
    cy.url().should("include", "/web/index.php/time");
  }

  assertTimeHeaderVisible(): void {
    cy.contains("h6", "Time").should("be.visible");
  }

  assertTimeMenuActive(): void {
    cy.get(this.selectors.activeTimeMenuItem).should("be.visible");
  }

  assertSelectEmployeeTitleVisible(): void {
    cy.contains("h6", "Select Employee").should("be.visible");
  }

  assertEmployeeFilterControlsVisible(): void {
    cy.contains("label", "Employee Name").should("be.visible");
    cy.get(this.selectors.employeeNameInput).should("be.visible");
  }

  assertFilterActionButtonsVisible(): void {
    cy.get(this.selectors.requiredHint).contains("* Required").should("be.visible");
    cy.get(this.selectors.viewButton).contains("View").should("be.visible");
  }

  assertPendingActionTitleVisible(): void {
    cy.contains("h6", "Timesheets Pending Action").should("be.visible");
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
    cy.get(this.selectors.tableHeader).should("contain.text", "Employee Name");
    cy.get(this.selectors.tableHeader).should("contain.text", "Timesheet Period");
    cy.get(this.selectors.tableHeader).should("contain.text", "Actions");
  }

  assertAtLeastOnePendingRecordVisible(): void {
    cy.get(this.selectors.tableCard).its("length").should("be.gte", 1);
  }

  assertRowViewActionsVisible(): void {
    cy.get(this.selectors.rowActionContainer).its("length").should("be.gte", 1);
    cy.get(this.selectors.rowViewButton).first().contains("View").should("be.visible");
  }
}

export const timePage = new TimePage();
