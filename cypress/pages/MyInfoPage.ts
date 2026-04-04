export class MyInfoPage {
  private readonly selectors = {
    // Menu/identity shell and tab strip
    activeMyInfoMenuItem:
      "ul.oxd-main-menu a.oxd-main-menu-item.active[href='/web/index.php/pim/viewMyDetails']",
    employeeNameHeader: ".orangehrm-edit-employee-name h6",
    profileImage: "img.employee-image[alt='profile picture']",
    tabs: ".orangehrm-tabs .orangehrm-tabs-item",

    // Personal details form fields
    firstNameInput: "input.orangehrm-firstname[name='firstName']",
    middleNameInput: "input.orangehrm-middlename[name='middleName']",
    lastNameInput: "input.orangehrm-lastname[name='lastName']",
    dateInput: ".oxd-date-input input.oxd-input",
    genderRadio: ".oxd-radio-wrapper input[type='radio']",
    personalDetailsHint: ".oxd-form-actions .orangehrm-form-hint",
    saveButton: ".oxd-form-actions button[type='submit']",

    // Custom fields and attachments sections
    customFieldsCard: ".orangehrm-custom-fields",
    attachmentsCard: ".orangehrm-attachment",
    attachmentsAddButton: ".orangehrm-action-header button",
    attachmentsRecordsText: ".orangehrm-attachment .orangehrm-vertical-padding .oxd-text--span",

    // Attachments table and row actions
    tableHeader: ".oxd-table-header",
    tableCard: ".oxd-table-card",
    rowActionContainer: ".oxd-table-cell-actions",
    rowEditIcon: ".oxd-table-cell-actions .bi-pencil-fill",
    rowDeleteIcon: ".oxd-table-cell-actions .bi-trash",
    rowDownloadIcon: ".oxd-table-cell-actions .bi-download",
  };

  assertOnMyInfoRoute(): void {
    cy.url().should("match", /\/web\/index\.php\/pim\/(viewMyDetails|viewPersonalDetails)/);
  }

  assertMyInfoMenuActive(): void {
    cy.get(this.selectors.activeMyInfoMenuItem).should("be.visible");
  }

  assertEmployeeIdentityVisible(): void {
    cy.get(this.selectors.employeeNameHeader).should("be.visible");
    cy.get(this.selectors.profileImage).should("be.visible");
  }

  assertPersonalDetailTabsVisible(): void {
    cy.get(this.selectors.tabs).contains("Personal Details").should("be.visible");
    cy.get(this.selectors.tabs).contains("Contact Details").should("be.visible");
    cy.get(this.selectors.tabs).contains("Emergency Contacts").should("be.visible");
    cy.get(this.selectors.tabs).contains("Dependents").should("be.visible");
    cy.get(this.selectors.tabs).contains("Immigration").should("be.visible");
    cy.get(this.selectors.tabs).contains("Job").should("be.visible");
    cy.get(this.selectors.tabs).contains("Salary").should("be.visible");
    cy.get(this.selectors.tabs).contains("Report-to").should("be.visible");
    cy.get(this.selectors.tabs).contains("Qualifications").should("be.visible");
    cy.get(this.selectors.tabs).contains("Memberships").should("be.visible");
  }

  assertPersonalDetailsSectionVisible(): void {
    cy.contains("h6", "Personal Details").should("be.visible");
    cy.contains("label", "Employee Full Name").should("be.visible");
    cy.get(this.selectors.firstNameInput).should("be.visible");
    cy.get(this.selectors.middleNameInput).should("be.visible");
    cy.get(this.selectors.lastNameInput).should("be.visible");

    cy.contains("label", "Employee Id").should("be.visible");
    cy.contains("label", "Other Id").should("be.visible");
    cy.contains("label", "Driver's License Number").should("be.visible");
    cy.contains("label", "License Expiry Date").should("be.visible");
    cy.contains("label", "Nationality").should("be.visible");
    cy.contains("label", "Marital Status").should("be.visible");
    cy.contains("label", "Date of Birth").should("be.visible");
    cy.contains("label", "Gender").should("be.visible");

    cy.get(this.selectors.dateInput).its("length").should("be.gte", 2);
    cy.get(this.selectors.genderRadio).its("length").should("be.gte", 2);
    cy.contains(".oxd-radio-wrapper", "Male").should("be.visible");
    cy.contains(".oxd-radio-wrapper", "Female").should("be.visible");

    cy.get(this.selectors.personalDetailsHint).contains("* Required").should("be.visible");
    cy.get(this.selectors.saveButton).first().contains("Save").should("be.visible");
  }

  assertCustomFieldsSectionVisible(): void {
    cy.get(this.selectors.customFieldsCard).within(() => {
      cy.contains("h6", "Custom Fields").should("be.visible");
      cy.contains("label", "Blood Type").should("be.visible");
      cy.contains("label", "Test_Field").should("be.visible");
      cy.get("button[type='submit']").contains("Save").should("be.visible");
    });
  }

  assertAttachmentsSectionVisible(): void {
    cy.get(this.selectors.attachmentsCard).within(() => {
      cy.contains("h6", "Attachments").should("be.visible");
      cy.get(this.selectors.attachmentsAddButton).contains("Add").should("be.visible");
    });
  }

  assertAttachmentRecordsFoundVisible(): void {
    cy.get(this.selectors.attachmentsRecordsText)
      .invoke("text")
      .then((text) => {
        const normalizedText = text.trim();

        expect(normalizedText).to.match(/^(No\s+Records?\s+Found|\(\d+\)\s*Record[s]?\s*Found)$/i);
      });
  }

  assertAttachmentTableHeadersVisible(): void {
    cy.get(this.selectors.tableHeader).should("contain.text", "File Name");
    cy.get(this.selectors.tableHeader).should("contain.text", "Description");
    cy.get(this.selectors.tableHeader).should("contain.text", "Size");
    cy.get(this.selectors.tableHeader).should("contain.text", "Type");
    cy.get(this.selectors.tableHeader).should("contain.text", "Date Added");
    cy.get(this.selectors.tableHeader).should("contain.text", "Added By");
    cy.get(this.selectors.tableHeader).should("contain.text", "Actions");
  }

  assertAtLeastOneAttachmentRecordVisible(): void {
    cy.get(this.selectors.tableCard).its("length").should("be.gte", 1);
  }

  assertAttachmentRowActionsVisible(): void {
    cy.get(this.selectors.rowActionContainer).its("length").should("be.gte", 1);
    cy.get(this.selectors.rowEditIcon).its("length").should("be.gte", 1);
    cy.get(this.selectors.rowDeleteIcon).its("length").should("be.gte", 1);
    cy.get(this.selectors.rowDownloadIcon).its("length").should("be.gte", 1);
  }
}

export const myInfoPage = new MyInfoPage();
