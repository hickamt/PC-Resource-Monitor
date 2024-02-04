# PC System Monitoring Information

This application is meant to run locally (server: localhost:5500, client: localhost:5173).

All CPU, Disk, and Memory information will be specific to the machine you spin the server up on. In my case, I tested this in MSFT VSCode in the WSL Ubuntu VM which produces the cores available on the machine but only displays the usage of the VM and not the actual MSFT OS usage of the CPU's.

Created Application Using:

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

## Dependencies LINUX

In addition to the `package.json` dependencies that will be install when you run `yarn setup` there are other packages that will need to be installed from your terminal locally. The following installation instructions are `bash` commands specific to Linux.

You will need the following packages installed on your local pc.

- [Traceroute: Overview by DreamHost](https://help.dreamhost.com/hc/en-us/articles/215840708-Traceroute)

```bash
# Install Traceroute
sudo apt update && sudo apt upgrade -y && sudo apt install traceroute
```

## Dependencies Microsoft

- `tracert` this should be included for Windows users. If you are using Windows WSL, you can choose the `tracertWSL` option. DO NOT choose this option for standard Linux Distro's

## Websites To Test Against or Learn From

- [Source: SecurityTrails "Top 12 Vulnerable Websites For Pen Testing ..."](https://securitytrails.com/blog/vulnerable-websites-for-penetration-testing)

1.  [Hack The Box](https://www.hackthebox.com/)
2.  [CTFlearn](https://ctflearn.com/)
3.  [HackThisSite](https://www.hackthissite.org/)
4.  [Google Gruyere](https://www.forensicxs.com/google-gruyere/)
5.  [GitHub Download: Damn Vulnerable iOS App - DVIA](https://github.com/prateek147/DVIA-v2)
6.  [Hellbound Hackers](https://hbh.sh/home)
7.  [OWASP: Multillidae II](https://owasp.org/www-project-mutillidae-ii/)
8.  [OWASP: WebGoat](https://owasp.org/www-project-webgoat/)
9.  [Root Me](https://www.root-me.org/?lang=en)
10. [OverTheWire](https://overthewire.org/wargames/)
