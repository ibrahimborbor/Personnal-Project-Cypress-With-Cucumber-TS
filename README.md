# OrangeHRM Automation Framework

![Cypress](https://img.shields.io/badge/Cypress-15.x-17202C?logo=cypress&logoColor=white)
![Cucumber BDD](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Reports](https://img.shields.io/badge/Reports-Allure%20%26%20Cucumber-orange)

Simple UI automation framework built with Cypress, Cucumber (BDD), and TypeScript.

## What this project covers

- Login module scenarios
- Dashboard module scenarios
- Admin module scenarios
- PIM module scenarios
- Leave module scenarios

## Tech stack

- Cypress
- @badeball/cypress-cucumber-preprocessor
- TypeScript
- Allure reporting

## Project structure

```text
cypress/
  e2e/
    features/           # Gherkin feature files
    step_definitions/   # Step implementations
  pages/                # Page Object Model classes
  reports/              # Generated reports
cypress.config.ts
package.json
```

## Prerequisites

- Node.js 18+
- npm

## Install dependencies

```bash
npm install
```

## Run tests

Open Cypress UI:

```bash
npm run cy:open
```

Run all tests headless:

```bash
npm run cy:run
```

Run all feature files explicitly:

```bash
npm run cy:feature
```

## Reporting

### Allure report (step-by-step)

Run tests + generate report:

```bash
npm run test:allure
```

Open report:

```bash
npm run allure:open
```

Report output:

- `cypress/reports/allure-results`
- `cypress/reports/allure-report`

### Cucumber HTML report

Run tests + generate report:

```bash
npm run test:report
```

Report output:

- `cypress/reports/cucumber-html/<timestamp>/index.html`
- `cypress/reports/cucumber-html/latest-report.txt`

## Notes

- `.gitignore` excludes generated report artifacts and local cache files.
- Use your own test credentials through environment variables when needed.

## Contributing

1. Create a branch from `main`.
2. Make your changes and run tests locally.
3. Commit with a clear message.
4. Push your branch and open a Pull Request.

Suggested pre-push checks:

```bash
npm run cy:run
npm run test:allure
```
