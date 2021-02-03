# Pam

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@pam/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## File structure

```
/
|- /apps # List of all applications (web, mobile, node)
|- /libs # List of all libraries shared on project
|--- /components # List of all shared components
|--- /screens # List of all shared screen
|--- /hooks # List of all commons hooks
|--- /helpers # List of all utils helpers (exemple: convert date to UTC, generate UUID)
|--- /langs # List of all langue shared between apps
|--- /core # Directory to centralise the core services
|----- /<domaine> # Lib to specifique domaine service (ex: shop, auth, analytics, ...)
|------- /api # List of all dataprovider to call api
|------- /entities # List of all entities related to this domain
|------- /hooks # List of all hook
|------- /normalizer # List of all data normalizer
|------- /slices # List of all redux slices
|------- /thunks # List of all redux thunks
```

## Utils

### Start WebSite

```bash
yarn start website
```

### Start Mobile App

#### Start Mobile React Native

```bash
yarn start mobile
```

#### Run Android

```bash
yarn start:android mobile
```

#### Run iOS

```bash
yarn start:ios mobile
```

###Creat a new lib

```bash
yarn nx g @nrwl/react:lib <name-of-lib>
```

###Creat a new component on lib

```bash
yarn nx g @nrwl/react:component <name-of-component> --project <name-of-lib>
```

If you want a generic component, change the `.babelrc` file, on the root of the lib:

```json
{
  "presets": ["@nrwl/react/babel"],
  "plugins": [
    [
      "react-native-web",
      {
        "commonjs": true
      }
    ]
  ]
}
```
