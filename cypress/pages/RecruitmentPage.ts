export class RecruitmentPage {
  private readonly selectors = {
    activeRecruitmentMenuItem:
      "ul.oxd-main-menu a.oxd-main-menu-item.active[href='/web/index.php/recruitment/viewRecruitmentModule']",
    selectDropdown: ".oxd-select-wrapper .oxd-select-text",
    candidateNameInput: ".oxd-autocomplete-wrapper input[placeholder='Type for hints...']",
    keywordsInput: ".oxd-input[placeholder='Enter comma seperated words...']",
    dateInputs: ".oxd-date-input input.oxd-input",
    resetButton: ".oxd-form-actions button[type='reset']",
    searchButton: ".oxd-form-actions button[type='submit']",
    addButton: ".orangehrm-header-container button",
    recordsFoundText: ".orangehrm-vertical-padding .oxd-text",
    tableHeader: ".oxd-table-header",
    tableCard: ".oxd-table-card",
    rowActionContainer: ".oxd-table-cell-actions",
    rowViewIcon: ".oxd-table-cell-actions .bi-eye-fill",
    rowDeleteIcon: ".oxd-table-cell-actions .bi-trash",
  };

  assertOnRecruitmentRoute(): void {
    cy.url().should("include", "/web/index.php/recruitment");
  }

  assertRecruitmentHeaderVisible(): void {
    cy.contains("h6", "Recruitment").should("be.visible");
  }

  assertRecruitmentMenuActive(): void {
    cy.get(this.selectors.activeRecruitmentMenuItem).should("be.visible");
  }

  assertCandidatesTitleVisible(): void {
    cy.get("h5.oxd-table-filter-title").contains("Candidates").should("be.visible");
  }

  assertCandidateFilterFieldsVisible(): void {
    cy.contains("label", "Job Title").should("be.visible");
    cy.contains("label", "Vacancy").should("be.visible");
    cy.contains("label", "Hiring Manager").should("be.visible");
    cy.contains("label", "Status").should("be.visible");
    cy.contains("label", "Candidate Name").should("be.visible");
    cy.contains("label", "Keywords").should("be.visible");
    cy.contains("label", "Date of Application").should("be.visible");
    cy.contains("label", "Method of Application").should("be.visible");

    cy.get(this.selectors.selectDropdown).its("length").should("be.gte", 5);
    cy.get(this.selectors.candidateNameInput).should("be.visible");
    cy.get(this.selectors.keywordsInput).should("be.visible");
    cy.get(this.selectors.dateInputs).its("length").should("be.gte", 2);
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
        const normalizedText = text.trim();

        expect(normalizedText).to.match(/^(No\s+Records?\s+Found|\(\d+\)\s*Record[s]?\s*Found)$/i);
      });
  }

  assertTableHeadersVisible(): void {
    cy.get(this.selectors.tableHeader).should("contain.text", "Vacancy");
    cy.get(this.selectors.tableHeader).should("contain.text", "Candidate");
    cy.get(this.selectors.tableHeader).should("contain.text", "Hiring Manager");
    cy.get(this.selectors.tableHeader).should("contain.text", "Date of Application");
    cy.get(this.selectors.tableHeader).should("contain.text", "Status");
    cy.get(this.selectors.tableHeader).should("contain.text", "Actions");
  }

  assertAtLeastOneCandidateRecordVisible(): void {
    cy.get(this.selectors.tableCard).its("length").should("be.gte", 1);
  }

  assertRowActionIconsVisible(): void {
    cy.get(this.selectors.rowActionContainer).its("length").should("be.gte", 1);
    cy.get(this.selectors.rowViewIcon).its("length").should("be.gte", 1);
    cy.get(this.selectors.rowDeleteIcon).its("length").should("be.gte", 1);
  }
}

export const recruitmentPage = new RecruitmentPage();
