function generateMarkdown(data) {

return `# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Description

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