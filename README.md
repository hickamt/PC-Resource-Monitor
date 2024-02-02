# PC System Monitoring Information

This application is meant to run locally (server: localhost:5500, client: localhost:5173).

At the time of creating this application I am running:

```bash
Node v20.9.0

yarn v1.22.19
```

## Setup Application

Make sure you have `yarn` installed. If you don't see a version for `yarn`, then follow the installation instructions for your OS. [WSL yarn installation](https://dev.to/bonstine/installing-yarn-on-wsl-38p2), [Standard Linux Installation for yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

```bash
yarn --version
```

Then, run the following two commands that are built into the /appRoot/package.json file.

```bash
yarn setup
```

```bash
yarn dev
```

## Teardown Application

To quickly remove the node_modules and yarn.lock file you can run:

```bash
yarn teardown
```

This might be useful if you want to copy the directory to a zip without dragging the entire node_modules library with you.
