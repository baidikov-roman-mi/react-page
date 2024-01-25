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

Here is the [link to the CodeSandbox preview](https://codesandbox.io/p/devtool/preview/baidikov-roman-mi/react-page/update-main?task=dev&port=5173&redirect=true&utm_source=gh_app). You can see the result without any local setup.

## To load this project locally, follow these steps:

### First step: Check for `node` and `pnpm`

- To check it, run the following commands in your bash terminal: `node -v`, `pnpm -v`

  - If you don't have `node` on your device, install it [here](https://nodejs.org/en)

  - If you don't have `pnpm`, run this command in your terminal: `npm install -D pnpm`

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

You have to install dependencies, add sass and finally start the development server by running. You can do so with the following command:

```
pnpm install && pnpm add sass && pnpm run dev
```

You'll get a message inside the bash terminal:

>> **Server running at http://localhost:5173/**

This means that you have successfully set up the project and you are free for local coding.
