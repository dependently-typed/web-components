# Contributing

## Getting started

1. Clone the repository
2. Install dependencies

The project uses the yarn package manager. You can install it from [here](https://yarnpkg.com/getting-started/install).

```
yarn install
```

3. Get familiar with the tooling

To start a dev server, run:
```
yarn dev
```

This will serve the documentation website, which you can view by navigating to [localhost:8080](localhost:8080). The dev server will automatically rebuild the project every time you make a change.

To lint the codebase, run:
```
yarn lint
```

To build a distribution of the project, run:
```
yarn build
```
You shouldn't have to run this command too often. It is mainly used in publishing the project to npm.

4. Get familiar with the infrastructure

It is highly recommended to first get familiar with web components. You can learn about them [here](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

| Category                | Tool                                          | Configuration    |
| ----------------------- | --------------------------------------------- | ---------------- |
| web component framework | [lit](https://lit.dev/)                       | n/a              |
| language                | [typescript](https://www.typescriptlang.org/) | tsconfig.json    |
| documentation site      | [11ty](https://11ty.dev/)                     | .eleventy.js     |
| bundler                 | [rollup](https://www.rollupjs.org/guide/en/)  | rollup.config.js |

Note that rollup is only used when building the documentation site. We do not ship bundled web components.

## Folder organization

- Documentation website: `docs/`
- Components: `src/components/<component-name>`
- Global styles: `src/index.css`

When you build the project, it will produce two artifact folders:
- `dist/`: Contains the compiled typescript code. It is not bundled. We ship this folder when publishing to npm.
- `_site/`: Documentation website

## Adding a web component

Each component is implemented in a separate directory under `src/components`. As mentioned above, we use [lit](https://lit.dev) to write web components. Relevant documentation can be found [here](https://lit.dev/docs/).

One peculiar feature about our collection is that we share design tokens by using a `theme-provider` component. This web component basically defines a set of CSS variables which you can use in your web component. The goal is to make it very easy to customize the look and feel of the component without duplicating a bunch of code. Using CSS variables lets you define a discrete set of styles and apply them across multiple components.

Feel free to take a look at some existing components to get a feel for how to implement one yourself!
