export class AdminPage {
  private readonly selectors = {
    // Left navigation and page header anchors
    activeAdminMenuItem: "ul.oxd-main-menu a.oxd-main-menu-item.active[href='/web/index.php/admin/viewAdminModule']",
    systemUsersTitle: "h5.oxd-table-filter-title",

    // System Users filter form inputs
    usernameInput: ".oxd-form .oxd-input",
    userRoleDropdown: ".oxd-form .oxd-select-text",
    employeeNameInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    statusDropdown: ".oxd-form .oxd-select-wrapper .oxd-select-text",

    // Filter actions
    resetButton: ".oxd-form-actions button.oxd-button--ghost",
    searchButton: ".oxd-form-actions button[type='submit']",

    // Table/list shell and row controls
    addButton: ".orangehrm-header-container button",
    recordsFoundText: ".orangehrm-horizontal-padding .oxd-text",
    tableHeader: ".oxd-table-header",
    tableCard: ".oxd-table-card",
    rowActionContainer: ".oxd-table-cell-actions",
    deleteIcon: ".bi-trash",
    editIcon: ".bi-pencil-fill",

    // Form containers and popup components used in add/delete flows
    filterArea: ".oxd-table-filter-area",
    addUserFormContainer: ".orangehrm-card-container",
    selectDropdown: ".oxd-select-dropdown",
    selectOption: ".oxd-select-option",
    autocompleteDropdown: ".oxd-autocomplete-dropdown",
    autocompleteOption: ".oxd-autocomplete-option",
    deleteConfirmTitle: ".oxd-text--card-title",
    tableContainer: ".orangehrm-container",
    deleteDialog: ".orangehrm-dialog-popup",
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
        expect(text).to.match(/\(\d+\)\s*Records?\s+Found/i);
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

  // ── Search filter interactions ───────────────────────────────────────────

  typeUsernameFilter(value: string): void {
    cy.get(`${this.selectors.filterArea} .oxd-input`).first().should("be.visible").clear().type(value);
  }

  selectUserRoleFilter(role: string): void {
    cy.get(`${this.selectors.filterArea} .oxd-select-wrapper`).first().should("be.visible").click();
    cy.get(this.selectors.selectDropdown)
      .should("be.visible")
      .contains(this.selectors.selectOption, role)
      .should("be.visible")
      .click();
  }

  selectStatusFilter(status: string): void {
    cy.get(`${this.selectors.filterArea} .oxd-select-wrapper`).last().should("be.visible").click();
    cy.get(this.selectors.selectDropdown)
      .should("be.visible")
      .contains(this.selectors.selectOption, status)
      .should("be.visible")
      .click();
  }

  clickFilterSearchButton(): void {
    cy.get(this.selectors.searchButton).should("be.visible").click();
  }

  assertFilteredRecordsFound(): void {
    cy.get(this.selectors.recordsFoundText)
      .invoke("text")
      .then((text) => {
        expect(text).to.match(/\(\d+\)\s*Records?\s+Found/i);
      });
  }

  assertFirstResultContainsUsername(username: string): void {
    cy.get(this.selectors.tableCard)
      .first()
      .find(".oxd-table-cell")
      .eq(1)
      .should("contain.text", username);
  }

  assertNoRecordsFound(): void {
    cy.contains(".oxd-text--span", "No Records Found").should("be.visible");
  }

  // ── Add user form ────────────────────────────────────────────────────────

  navigateToAddUser(): void {
    cy.get(this.selectors.addButton).should("be.visible").click();
  }

  assertAddUserFormTitleVisible(): void {
    cy.contains("h6", "Add User").should("be.visible");
  }

  assertAddUserFormFieldsVisible(): void {
    cy.contains("label", "User Role").should("be.visible");
    cy.contains("label", "Employee Name").should("be.visible");
    cy.contains("label", "Status").should("be.visible");
    cy.contains("label", "Username").should("be.visible");
    cy.contains("label", "Password").should("be.visible");
    cy.contains("label", "Confirm Password").should("be.visible");
  }

  fillAddUserForm(): void {
    // User Role
    cy.get(`${this.selectors.addUserFormContainer} .oxd-select-wrapper`).eq(0).should("be.visible").click();
    cy.get(this.selectors.selectDropdown)
      .should("be.visible")
      .contains(this.selectors.selectOption, "Admin")
      .should("be.visible")
      .click();

    // Employee Name autocomplete
    cy.wait(2000);
    cy.contains(`${this.selectors.addUserFormContainer} label`, "Employee Name", { timeout: 10000 })
      .should("be.visible")
      .parents(".oxd-input-group")
      .should("be.visible")
      .within(() => {
        cy.get(".oxd-autocomplete-wrapper", { timeout: 10000 }).should("be.visible");
        cy.get("input[placeholder='Type for hints...']", { timeout: 10000 })
          .should("be.visible")
          .click()
          .clear()
          .type("a", { delay: 100 });
      });

    cy.wait(2000);
    cy.get(`${this.selectors.autocompleteDropdown} ${this.selectors.autocompleteOption}`, { timeout: 10000 })
      .should(($options) => {
        expect($options.length).to.be.greaterThan(0);
      })
      .first()
      .should("be.visible")
      .click();

    // Status
    cy.get(`${this.selectors.addUserFormContainer} .oxd-select-wrapper`).eq(1).should("be.visible").click();
    cy.get(this.selectors.selectDropdown)
      .should("be.visible")
      .contains(this.selectors.selectOption, "Enabled")
      .should("be.visible")
      .click();

    // Username
    cy.get(`${this.selectors.addUserFormContainer} .oxd-input:not([type="password"])`).should("be.visible").type("CypressAuto");

    // Password
    cy.get(`${this.selectors.addUserFormContainer} input[type="password"]`).eq(0).should("be.visible").type("Admin@12345");

    // Confirm Password
    cy.get(`${this.selectors.addUserFormContainer} input[type="password"]`).eq(1).should("be.visible").type("Admin@12345");
  }

  submitAddUserForm(): void {
    cy.get(`${this.selectors.addUserFormContainer} button[type="submit"]`).should("be.visible").click();
  }

  assertUserSavedSuccessfully(): void {
    cy.url().should("include", "/web/index.php/admin/viewSystemUsers");
  }

  // ── Delete user ─────────────────────────────────────────────────────────

  clickDeleteIconOnFirstRow(): void {
    cy.contains(this.selectors.tableCard, "CypressAuto", { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(`${this.selectors.rowActionContainer} button`).first().should("be.visible").click();
      });
  }

  assertDeleteConfirmDialogVisible(): void {
    cy.get(this.selectors.deleteDialog, { timeout: 10000 }).should("be.visible");
    cy.get(this.selectors.deleteDialog)
      .contains(this.selectors.deleteConfirmTitle, "Are you Sure?")
      .should("be.visible");
  }

  confirmDelete(): void {
    cy.get(this.selectors.deleteDialog)
      .contains("button", "Yes, Delete")
      .should("be.visible")
      .click();
  }

  assertDeletedUserNotInTable(): void {
    cy.get(this.selectors.tableContainer).should("not.contain.text", "CypressAuto");
  }
}

export const adminPage = new AdminPage();
