# Introduction

This project is for End to end testing of Altinn solution using [cypress](https://www.cypress.io/).

## Getting Started

These instructions will get you run the end to end tests on test environments.

### Install dependencies

```cmd
    npm install # only needed first time, or when dependencies are updated
```

### Open cypress and run tests

Run the below command to open cypress with the environment

```cmd
    npm run cy:open --env=at22
```

### Format files with prettier

```cmd
    npm run check # For checking the files deviating standards
    npm run format # format and save the files based on config
```
