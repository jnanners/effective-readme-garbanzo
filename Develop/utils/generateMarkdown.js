// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
    ${data.description}
  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Questions](#questions)
  ## <a name='installation'>Installation</a>
    ${data.installation}
  ## <a name='usage'>Usage</a>
    ${data.usage}
  ## <a name='license'>License</a>
    ${data.license}
  ## Contributing
    ${data.contributing}
  ## Tests
    ${data.tests}
  ## <a name='questions'>Questions</a>
    If you have questions you can:
      - Contact me on Github at [github.com/${data.username}](https://github.com/${data.username})
      - Email me at ${data.email}
`;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
