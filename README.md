# PC System Monitoring Information

This application is meant to run locally (server: localhost:5500, client: localhost:5173). The application was built in WSL using Ubuntu. The commands used and packages (such as 'traceroute') will not work on the Microsoft OS.

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

## Dependencies

In addition to the `package.json` dependencies that will be install when you run `yarn setup` there are other packages that will need to be installed from your terminal locally. The following installation instructions are `bash` commands specific to Linux. If you are trying to run this program in VSCode but you are using Microsft OS, this program will NOT work. Install WSL or use a linux system.

You will need the following packages installed on your local pc.

- [Traceroute: Overview by DreamHost](https://help.dreamhost.com/hc/en-us/articles/215840708-Traceroute)

```bash
# Install Traceroute
sudo apt update && sudo apt upgrade -y && sudo apt install traceroute
```
