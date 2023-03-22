function generateMarkdown(data) {
    let licenseBadge = '';

    if (data.license === 'MIT') {
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (data.license === 'Apache 2.0 License') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (data.license === 'Boost') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';


    return `# ${data.title}

    ${licenseBadge}

    ##Description

    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation 

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    This project is licensed under the ${data.license} license.

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Questions

    If you have any questions or feedback, don't hesitate to contact me via email or GitHub.

    - Email: ${data.email}
    - GitHub: https://github.com/${data.github}

  `;
  }
  
  module.exports = generateMarkdown;