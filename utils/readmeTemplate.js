
const readmeTemplate = function (data) {

    console.log("data features",data.features);
    return `
## Description

${data.description}

![license](${data.licenseBadge})

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Guidelines](#guidelines)
- [Testing](#testing)
- [License](#license)

## Installation Instructions

${data.instructions}

## Usage
${data.usage}

### Screenshot


![alt text](./assets/images/screenshot.png)


## Features

${data.features}

## Guidelines
${data.guidelines}

## Testing
${data.testing}

## Questions

For questions, please contact <mailto:${data.email}> or 

view github:
(${data.gitHubBadge})
<${data.github}>

## License

<${data.licenseLink}>

${data.licenseSection}

---

`;
}

module.exports = readmeTemplate;