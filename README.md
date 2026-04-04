# OrangeHRM Automation Framework

![Cypress](https://img.shields.io/badge/Cypress-15.x-17202C?logo=cypress&logoColor=white)
![Cucumber BDD](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Reports](https://img.shields.io/badge/Reports-Allure%20%26%20Cucumber-orange)

Simple UI automation framework built with Cypress, Cucumber (BDD), and TypeScript.

## Quick Start

```bash
npm install
npm run cy:run
npm run test:allure
```

Then open the Allure report:

```bash
npm run allure:open
```

## Demo Preview

You can add a project preview image or gif here after your first run.

Example:

```markdown
![Framework Demo](docs/demo.gif)
```

Tip: create a `docs/` folder and place screenshots/gifs there for your README.

## What this project covers

- Login module scenarios
- Dashboard module scenarios
- Admin module scenarios
- PIM module scenarios
- Leave module scenarios
- Time module scenarios
- Recruitment module scenarios
- My Info module scenarios
- Performance module scenarios
- Directory module scenarios
- Claim module scenarios

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
      orangehrm-common-dashboard.steps.ts  # Shared dashboard login step
  pages/                # Page Object Model classes
  reports/              # Generated reports
cypress.config.ts
package.json
```

## Framework design

- BDD scenarios are written in feature files and mapped to TypeScript step definitions.
- Page Object Model classes keep selectors and UI actions/assertions reusable and centralized.
- Shared login setup is centralized through a common step and reused with `Background` blocks in module feature files.
- Dynamic UI sections use stable selectors and visibility checks to reduce flaky test failures.

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

Run smoke tests only:

```bash
npm run cy:run:smoke
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

## Recent updates

- Added coverage for My Info, Performance, Directory, and Claim modules.
- Added Admin end-to-end scenarios for search, add user, and delete user flows.
- Refactored module feature files to use shared dashboard login setup.
- Introduced a common dashboard login step definition to avoid duplicate step matches.
- Hardened selectors and assertions for dynamic OrangeHRM UI elements.

## CI/CD

- GitHub Actions workflow: `.github/workflows/cypress-ci.yml`
- Pull requests and pushes to `main` run smoke tests (`@smoke`).
- Scheduled and manual runs execute the full suite.
- Test artifacts (videos, screenshots, Cucumber JSON/HTML, Allure results/report) are uploaded for every CI run.

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

## Future Improvements

- Add API test coverage for core OrangeHRM endpoints.
- Add cross-browser runs (Chrome + Firefox) in CI.
- Add data-driven scenarios for multiple user roles.
- Expand tag strategy for smoke/regression/nightly pipelines.
