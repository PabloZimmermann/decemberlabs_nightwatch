# DecemberLabs Nightwatch Testing

This project contains tests for DecemberLabs core functionalities, written in JavaScript using Nightwatch.js.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. If you haven't installed them yet, you can download and install them from [here](https://nodejs.org/).

### Installing

1. Clone this repository to your local machine.

git clone https://github.com/PabloZimmermann/decemberlabs_nightwatch.git

2. Navigate to the project directory.

cd decemberlabs_nightwatch

3. Install the project dependencies.

npm install

4. Run the tests.

npm run test

## Solution

Given that the assignment consisted of three main validations, I chose to create three distinct tests using the Mocha framework.

## Proposed Improvements

For a more realistic working scenario, there are several improvements that could be made to the tests:

1. Consider the use of a separate object for the form. This would provide a more modular and manageable approach that just adding all the methods in the home page object.
2. Instead of hard coding, import test data from a separate folder. This can enhance maintainability.
3. Incorporate try-catch blocks to provide more meaningful error logs.
4. Include different scripts for various browser options or worker counts, thereby improving the test suite's flexibility.
5. Implement a .env file for setting the URL. This could facilitate testing across different environments such as localhost, development, or staging.
6. I will also add more statics selectors ids in the HTML.
