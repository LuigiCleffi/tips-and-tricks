# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Configuring typescript into an existing project   
 
> npm install --save-dev typescript
> create a new file called tsconfig.json
_note: avoid using `tsc --init` check the following [repo](https://github.com/tsconfig/bases/blob/main/bases/vite-react.json) for more information_
> just make sure that Vite uses two tsconfig.json file. One is for configuring Vite itself and the other one for running on the browser. Check [this reference](https://stackoverflow.com/questions/72027949/why-does-vite-create-two-typescript-config-files-tsconfig-json-and-tsconfig-nod) for more information

# Configuring Tailwind CSS
[_Tailwind CSS Docs_](https://tailwindcss.com/docs/guides/vite)
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

Install the following extension for having support of postcss
> Name: PostCSS Language Support
Id: csstools.postcss
Description: Syntax highlighting for modern and experimental CSS in VSCode
Version: 1.0.9
Publisher: csstools
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=csstools.postcss