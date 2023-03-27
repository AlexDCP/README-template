// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if(license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if(license === "BSD") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none") {
    return `- [License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `## License

    This project uses the ${license} license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution

  If you would like to help with the project, contact me here at: ${data.contribution}

  ## Tests

  The tests run on this project included:

  - ${data.test}

  ## Questions

  If you have any further questions feel free to reach me at: ${data.questions}

  You can also find my github here: [${data.github}](https://github.com/${data.github})

  `;
}

module.exports = generateMarkdown;
