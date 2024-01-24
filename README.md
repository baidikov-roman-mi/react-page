[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&pause=1000&random=false&width=1100&height=70&lines=React+Introduction+%2B+Vite,+TS,+SCSS)](https://git.io/typing-svg)

<div align="center">
    <p>Hello, this is my <strong>first</strong> project about react introduction, which includes:</p>
    <a href='https://www.w3schools.com/typescript/typescript_intro.php' title="TypeScript" >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" height="42" width="42" alt="typescript logo"  />
    </a>
    <a href='https://www.w3schools.com/react/react_intro.asp' title="React">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="42" width="42" alt="react logo"  />
    </a>
        <a href='https://www.w3schools.com/sass/sass_intro.php' title="Sass" >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="42" width="42" alt="sass logo"  />
    </a>
    <a href='https://vitejs.dev/' title="Vite">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" height="42" width="42" alt="git logo"  />
    </a>
</div>

## Overview

This project serves as an introduction to React, utilizing Vite for faster development, TypeScript for type checking, and SCSS for styling.

### Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Just to see the output

Here is the [link to the CodeSandbox preview](https://codesandbox.io/p/github/baidikov-roman-mi/react-page/draft/confident-fast?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrrlzjuk00062a66a99f5jua%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrrlzjuk00022a66plcn3yx7%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrrlzjuk00042a66dmd2z8wr%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrrlzjuk00052a6647dmxuq5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrrlzjuk00022a66plcn3yx7%2522%253A%257B%2522id%2522%253A%2522clrrlzjuk00022a66plcn3yx7%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clrrlzjuk00052a6647dmxuq5%2522%253A%257B%2522id%2522%253A%2522clrrlzjuk00052a6647dmxuq5%2522%252C%2522activeTabId%2522%253A%2522clrrm24ds00au2a66v0r71g2j%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clrrm24ds00au2a66v0r71g2j%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clrrlzjuk00042a66dmd2z8wr%2522%253A%257B%2522id%2522%253A%2522clrrlzjuk00042a66dmd2z8wr%2522%252C%2522activeTabId%2522%253A%2522clrrm1zs1008q2a66dxk2aw8o%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrrlzjuk00032a66ag3rft0q%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clrrlzkvj0016edi0d6bka9b3%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clrrm1zs1008q2a66dxk2aw8o%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D). You can see the result without any local setup.

## To load this project locally, follow these steps:

### First step: Check for `node`, `pnpm` and `sass`

- To check it, run the following commands in your bash terminal: `node -v`, `pnpm -v`, `sass --version`

  - If you don't have `node` on your device, install it [here](https://nodejs.org/en)

  - If you don't have `pnpm`, run this command in your terminal: `npm install -D pnpm`

  - If you don't have `sass`, run this command in your terminal: `npm install -D sass`

> If you want to install it globably, just change "-D" into "-g". You can see more info on [pnpm documentation](https://pnpm.io/cli/install) about pnpm flags

### Second step: Clone this repository using this commands :

```
git clone https://github.com/baidikov-roman-mi/react-page
cd react-page
```

> The cd command is necessary only if your current folder is not empty.

Otherwise, just add "." in the end of `git clone`, and the project will be cloned iside of the folder you are in:

```
git clone https://github.com/baidikov-roman-mi/react-page .
```

### Third step: Local setup

Run `pnpm install` to install dependencies.

And finally start the development server by running `pnpm run serve`. You'll get a message inside the terminal:

**Server running at http://localhost:5173/**

This means that you have successfully set up the project and you are free for coding.
