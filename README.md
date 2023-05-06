# GoTrash Web App

[![ci](https://github.com/gotrash/gotrash-webapp/actions/workflows/ci.yml/badge.svg)](https://github.com/gotrash/gotrash-webapp/actions/workflows/ci.yml)

The GoTrash web app is based on Nuxt.JS v2. For further information, please consult the [Nuxt Docs](https://nuxtjs.org/docs/), [Vue.JS Guide](https://v2.vuejs.org/v2/guide/) and [Vue.JS API Docs](https://v2.vuejs.org/v2/api/).

## Development & Deployment

### Build Setup

To build the GoTrash app, the Node Package Manager (NPM) dependencies need to be installed first. To do so, run the following command:

```bash
# install dependencies
$ npm install
```

To start a development server, then we run the following:

```bash
# serve with hot reload at localhost:3000
$ npm run dev
```

Building for production is a 2-step process, no matter what mode your generating the site in. Irregardless of what mode your building the app for, you need to run the following:

```bash
# build for production
$ npm run build
```

If your running the app with server-side rendering, then use the start script to get a server running:

```bash
# launch server
$ npm run start
```

To generate a static site, use the generate command:

```bash
# generate static project
$ npm run generate
```

### Lint Scripts

The following scripts are used for linting and fixing any lint errors that are picked up by the lint tools. Linting is required for code to be submitted to the repository and any pull requests will not me approved if any lint errors are picked up.

```bash
# Lint All
$ npm run lint
# Lint CSS
$ npm run lint:css
# Lint JS
$ npm run lint:js
# Lint Prettier
$ npm run lint:prettier

# Fix All
$ npm run lint
# Fix CSS
$ npm run lint:css
# Fix JS
$ npm run lint:js
# Fix Prettier
$ npm run lint:prettier
```

### Test Script

Use the following command to run the unit tests for the app.

Tests are implemented using Jest and live in the `./tests` folder (funnily enough). Any tasks completed should ideally include tests and all tests should pass.

```bash
# test script
$ npm run test
```

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.
