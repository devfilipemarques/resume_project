# Resume Theme React

<a href="http://www.typescriptlang.org/"><img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square" height="20"></a>

This theme was created to show your online curriculum, the application developed in [React](https://reactjs.org/), HTML and CSS.

## Features

- Optimize the time spent to attach your resume via email
- Helps the environment not to print more papers
- Simple to configure
- Agility in accessing and viewing
- Economical route system
- HTML page rendering (SSR) at CDN edge locations
- Hot module replacement during local development using React Refetch
- Pre-configured with CSS-in-JS styling
- Pre-configured with code quality tools: ESLint, Prettier, TypeScript, etc.

<a href="https://fabulous-conkies-a11ca7.netlify.app/"><img src="https://i.imgur.com/RSWCjJO.png" /></a>&nbsp;&nbsp;

---

## Directory Structure

`├──`[`.github`](.github) — GitHub configuration including CI/CD workflows<br>
`├──`[`main`](./main) — Web application front-end built with [React](https://reactjs.org/) and [Material UI](https://mui.com/core/)<br>

## Tech Stack

- [React](https://reactjs.org/), [Recoil](https://recoiljs.org/),
  [TypeScript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/),
  [Prettier](https://prettier.io/), [Jest](https://jestjs.io/),

## Requirements

- [Node.js](https://nodejs.org/) v18 or newer, [Yarn](https://yarnpkg.com/) package manager
- [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)

## Getting Started

[Generate](https://github.com/devfilipemarques/resume_project/generate) a new project
from this template, clone it, install project dependencies, and start hacking:

```
$ git clone https://github.com/devfilipemarques/resume_project.git example
$ cd ./example
$ npm install
$ npm start
```

The app will become available at [http://localhost:3000](http://localhost:3000/).

**IMPORTANT**: Ensure that VSCode is using the workspace [version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions)
and ESLint.

![](https://files.tarkus.me/typescript-workspace.png)

## Scripts

- `npm start` — Launches the app in development mode on [`http://localhost:3000`](http://localhost:3000/)
- `npm build` — Compiles and bundles the app for deployment
- `npm lint` — Validate the code using ESLint
- `npm tsc` — Validate the code using TypeScript compiler
- `npm test` — Run unit tests with Jest, Supertest
- `npm edge deploy` — Deploys the app to Cloudflare


---

<sup>Made with ♥ by Filipe Reis [dev](https://github.com/devfilipemarques).</sup>
