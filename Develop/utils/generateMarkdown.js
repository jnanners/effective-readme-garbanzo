// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return "";
  }
  if(license === "Unlicensed"){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  else if(license === "Boost Software"){
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if(license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license === "Apache"){
    return "[![License]([![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license === "Mozilla Public"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else if(license === "GNU LGPLv3"){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  else if(license === "GNU GPLv3"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else{
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return "";
  }
  if(license === "Unlicensed"){
    return "<a href='https://opensource.org/licenses/unlicense' target='_blank'>The Unlicensed</a>"
  }
  else if(license === "Boost Software"){
    return "<a href='https://opensource.org/licenses/BSL-1.0' target='_blank'>Boost Software License</a>"
  }
  else if(license === "MIT"){
    return "<a href='https://opensource.org/licenses/MIT' target='_blank'>MIT License</a>"
  }
  else if(license === "Apache"){
    return "<a href='https://opensource.org/licenses/Apache-2.0' target='_blank'>Apache License</a>"
  }
  else if(license === "Mozilla Public"){
    return "<a href='https://opensource.org/licenses/MPL-2.0' target='_blank'>Mozilla Public License</a>"
  }
  else if(license === "GNU LGPLv3"){
    return "<a href='https://opensource.org/licenses/LGPL-3.0' target='_blank'>GNU Lesser General Public License</a>"
  }
  else if(license === "GNU GPLv3"){
    return "<a href='https://opensource.org/licenses/GPL-3.0' target='_blank'>GNU General Public License</a>"
  }
  else{
    return "<a href='https://opensource.org/licenses/AGPL-3.0' target='_blank'>GNU Affero Gneral Public License</a>"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description  
  ${renderLicenseBadge(data.license)}  
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have questions you can:  
  * Contact me on Github at [github.com/${data.username}](https://github.com/${data.username})  
  * Email me at ${data.email}
`;
}

module.exports = {generateMarkdown};
