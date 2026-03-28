export class AdminPage {
  private readonly selectors = {
    activeAdminMenuItem: "ul.oxd-main-menu a.oxd-main-menu-item.active[href='/web/index.php/admin/viewAdminModule']",
    systemUsersTitle: "h5.oxd-table-filter-title",
    usernameInput: ".oxd-form .oxd-input",
    userRoleDropdown: ".oxd-form .oxd-select-text",
    employeeNameInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    statusDropdown: ".oxd-form .oxd-select-wrapper .oxd-select-text",
    resetButton: ".oxd-form-actions button.oxd-button--ghost",
    searchButton: ".oxd-form-actions button[type='submit']",
    addButton: ".orangehrm-header-container button",
    recordsFoundText: ".orangehrm-horizontal-padding .oxd-text",
    tableHeader: ".oxd-table-header",
    tableCard: ".oxd-table-card",
    rowActionContainer: ".oxd-table-cell-actions",
    deleteIcon: ".bi-trash",
    editIcon: ".bi-pencil-fill",
  };

  assertOnAdminRoute(): void {
    cy.url().should("include", "/web/index.php/admin/viewSystemUsers");
  }

  assertAdminHeaderVisible(): void {
    cy.contains("h6", "Admin").should("be.visible");
  }

  assertAdminMenuActive(): void {
    cy.get(this.selectors.activeAdminMenuItem).should("be.visible");
  }

  assertSystemUsersTitleVisible(): void {
    cy.get(this.selectors.systemUsersTitle).contains("System Users").should("be.visible");
  }

  assertFilterFieldsVisible(): void {
    cy.contains("label", "Username").should("be.visible");
    cy.contains("label", "User Role").should("be.visible");
    cy.contains("label", "Employee Name").should("be.visible");
    cy.contains("label", "Status").should("be.visible");

    cy.get(this.selectors.usernameInput).first().should("be.visible");
    cy.get(this.selectors.userRoleDropdown).first().should("contain.text", "-- Select --");
    cy.get(this.selectors.employeeNameInput).should("be.visible");
    cy.get(this.selectors.statusDropdown).last().should("contain.text", "-- Select --");
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
    cy.get(this.selectors.tableHeader).should("contain.text", "Username");
    cy.get(this.selectors.tableHeader).should("contain.text", "User Role");
    cy.get(this.selectors.tableHeader).should("contain.text", "Employee Name");
    cy.get(this.selectors.tableHeader).should("contain.text", "Status");
    cy.get(this.selectors.tableHeader).should("contain.text", "Actions");
  }

  assertAtLeastOneUserRecordVisible(): void {
    cy.get(this.selectors.tableCard).its("length").should("be.gte", 1);
  }

  assertRowActionIconsVisible(): void {
    cy.get(this.selectors.rowActionContainer).first().within(() => {
      cy.get(this.selectors.deleteIcon).should("be.visible");
      cy.get(this.selectors.editIcon).should("be.visible");
    });
  }
}

export const adminPage = new AdminPage();
