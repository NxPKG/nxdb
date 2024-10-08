---
title: Installation
slug: install.html
---


# Install

## npm

To install the latest release of `nxdb` and its dependencies and save it to your `package.json`, run:

`npm i nxdb --save`

## peer-dependency

You also need to install the peer-dependency `rxjs` if you have not installed it before.

`npm i rxjs --save`

## polyfills

NxDB is coded with es8 and transpiled to es5\. This means you have to install [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) to support older browsers. For example you can use the babel-polyfills with:

`npm i @babel/polyfill --save`

If you need polyfills, you have to import them in your code.

```typescript
import '@babel/polyfill';
```

## Polyfill the `global` variable

When you use NxDB with **angular** or other **webpack** based frameworks, you might get the error `Uncaught ReferenceError: global is not defined`.
This is because some dependencies of NxDB assume a Node.js-specific `global` variable that is not added to browser runtimes by some bundlers.
You have to add them by your own, like we do [here](https://github.com/nxpkg/nxdb/blob/master/examples/angular/src/polyfills.ts).

```ts
(window as any).global = window;
(window as any).process = {
    env: { DEBUG: undefined },
};
```

## Project Setup and Configuration

In the [examples](https://github.com/nxpkg/nxdb/tree/master/examples) folder you can find CI tested projects for different frameworks and use cases, while in the [/config](https://github.com/nxpkg/nxdb/tree/master/config) folder base configuration files for Webpack, Rollup, Mocha, Karma, Typescript are exposed.

Consult [package.json](https://github.com/nxpkg/nxdb/blob/master/package.json) for the versions of the packages supported.

## Latest

If you need the latest development state of NxDB, add it as git-dependency into your `package.json`.

```json
  "dependencies": {
      "nxdb": "git+https://git@github.com/nxpkg/nxdb.git#commitHash"
  }
```

Replace `commitHash` with the hash of the latest [build-commit](https://github.com/nxpkg/nxdb/search?q=build&type=Commits).

## Import

To import `nxdb`, add this to your JavaScript file to import the default bundle that contains the NxDB core:

```typescript
import {
  createRxDatabase,
  /* ... */
} from 'nxdb';
```
