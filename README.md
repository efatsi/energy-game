# Our React Way

How we do React apps at Viget. Clone this project when you start a new React project.

---

1. [Setup](#setup)
2. [Startup](#startup)
3. [Testing](#testing)

## Setup

### Requirements

This is a JavaScript-dominant project. To support that, we require a few tools:

1. [NodeJS 8.9.4 (LTS)](https://nodejs.org/en/)
2. [Yarn >= 1.0](https://yarnpkg.com/en/docs/install)

There are a few ways to manage NodeJS versions between projects. We like [nvm](https://github.com/creationix/nvm) and [asdf](https://github.com/asdf-vm/asdf). If using `nvm`, there is a `.nvmrc` file in each app directory that enforces the desired node version.

From there, install dependencies by executing:

```
yarn install
```

### Environment configuration

We manage environment specific information, like API keys and API locations using a `.env` file. Copy this file before running the project:

```
cp .env.example .env
```

## Startup

```bash
$ yarn start
```

This will run a local development server. The location should report in the terminal output.

## Testing

There are a number of commands available for running tests:

```bash
# Run the entire test suite
$ yarn test

# Run tests matching a given pattern
$ yarn test block.test.js

# Run tests in watch mode
$ yarn test --watch
```

### Run tests matching a pattern and watching

```
$ yarn test block.test.js --watch
```

### Test Coverage

```bash
$ yarn test:cov
```

This generates a report in the terminal, and build an HTML report within the `./coverage` folder at the root of the project.

### Debugging acceptance tests

Some tests use [puppeteer](https://github.com/GoogleChrome/puppeteer): a headless browser powered by Chromium. To watch these tests execute in a window, run:

```bash
$ DEBUG=* yarn test
```

This also lets you monitor the developer console.
