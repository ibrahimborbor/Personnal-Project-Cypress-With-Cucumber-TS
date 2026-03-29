const fs = require("fs");
const path = require("path");
const report = require("multiple-cucumber-html-reporter");

const projectRoot = process.cwd();
const jsonDir = path.join(projectRoot, "cypress", "reports", "cucumber-json");
const reportsRoot = path.join(projectRoot, "cypress", "reports", "cucumber-html");

const buildTimestamp = () => {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const second = pad(now.getSeconds());

  return `${year}${month}${day}-${hour}${minute}${second}`;
};

const timestamp = buildTimestamp();
const reportPath = path.join(reportsRoot, timestamp);

if (!fs.existsSync(jsonDir)) {
  console.warn(`Cucumber JSON directory not found: ${jsonDir}`);
  process.exit(0);
}

const jsonFiles = fs
  .readdirSync(jsonDir)
  .filter((file) => file.toLowerCase().endsWith(".json"));

if (jsonFiles.length === 0) {
  console.warn(`No Cucumber JSON files found in: ${jsonDir}`);
  process.exit(0);
}

report.generate({
  jsonDir,
  reportPath,
  reportName: "OrangeHRM Cypress Cucumber Report",
  pageTitle: "OrangeHRM Test Execution",
  displayDuration: true,
  displayReportTime: true,
  openReportInBrowser: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "headless",
    },
    device: "Local machine",
    platform: {
      name: process.platform,
      version: process.version,
    },
  },
});

const latestPointerFile = path.join(reportsRoot, "latest-report.txt");
const latestIndexPath = path.join(reportPath, "index.html");

fs.mkdirSync(reportsRoot, { recursive: true });
fs.writeFileSync(latestPointerFile, latestIndexPath);

console.log(`Cucumber HTML report generated at: ${latestIndexPath}`);
console.log(`Latest report pointer: ${latestPointerFile}`);
