[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&pause=1000&random=false&width=1100&height=70&lines=React+Introduction+%2B+Vite,+TS,+SCSS)](https://git.io/typing-svg)

<div align="center">
    <p>Hello, this is my <strong>first</strong> project about react introduction, which includes:</p>
    <a href='https://www.w3schools.com/typescript/typescript_intro.php' title="TypeScript" >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" height="42" width="42" alt="typescript logo"  />
    </a>
        <a href='https://www.w3schools.com/sass/sass_intro.php' title="Sass" >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="42" width="42" alt="sass logo"  />
    </a>
    <a href='https://vitejs.dev/' title="Vite">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" height="42" width="42" alt="git logo"  />
    </a>
        <a href='https://www.w3schools.com/html/html_intro.asp' title="HTML5" > 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="42" width="42" alt="html5 logo"  />
    </a>
</div>

## Overview

This project serves as a calculator using Vite for faster development, TypeScript for type checking, and SCSS for styling.

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

Here is the [link to the CodeSandbox preview](https://codesandbox.io/p/github/baidikov-roman-mi/anime-sound-calculator/master?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrroqsaq00062a65tzy6klzv%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrroqsaq00022a65c1rndjxq%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrroqsaq00042a65yc4y468l%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrroqsaq00052a65ldz47ezz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrroqsaq00022a65c1rndjxq%2522%253A%257B%2522id%2522%253A%2522clrroqsaq00022a65c1rndjxq%2522%252C%2522activeTabId%2522%253A%2522clrrp04dg003j2a66bskbtllw%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrroqsap00012a65sdkaag7n%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522id%2522%253A%2522clrrp04dg003j2a66bskbtllw%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clrroqsaq00052a65ldz47ezz%2522%253A%257B%2522id%2522%253A%2522clrroqsaq00052a65ldz47ezz%2522%252C%2522activeTabId%2522%253A%2522clrrov0xb006f2a66bnea834v%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clrrov0xb006f2a66bnea834v%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clrroqsaq00042a65yc4y468l%2522%253A%257B%2522id%2522%253A%2522clrroqsaq00042a65yc4y468l%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clrroqxlf003p2a65qim5g41z%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clrroqxlf003p2a65qim5g41z%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A18.203125%257D). You can see the result without any local setup.

## To load this project locally, follow these steps:

### First step: Check for `node` and `pnpm`

- To check it, run the following commands in your bash terminal: `node -v`, `pnpm -v`

  - If you don't have `node` on your device, install it [here](https://nodejs.org/en)

  - If you don't have `pnpm`, run this command in your terminal: `npm install -D pnpm`

### Second step: Clone this repository using this commands :

```
git clone https://github.com/baidikov-roman-mi/anime-sound-calculator
cd anime-sound-calculator
```

> The cd command is necessary only if your current folder is not empty.

Otherwise, just add "." in the end of `git clone`, and the project will be cloned iside of the folder you are in:

```
git clone https://github.com/baidikov-roman-mi/anime-sound-calculator .
```

### Third step: Local setup

You have to install dependencies, add sass and finally start the development server by running. You can do so with the following command:

```
pnpm install && pnpm add sass && pnpm run dev
```

You'll get a message inside the bash terminal:

>> **Server running at http://localhost:5173/**

This means that you have successfully set up the project and you are free for local coding.
