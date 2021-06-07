# `@therealklanni/eslint-config` ![npm downloads](https://img.shields.io/npm/dt/@therealklanni/eslint-config?logo=npm)

> _**❗️ It's not recommended to use these configs directly. Instead, install and
> configure them via [@therealklanni/eslint-plugin](../eslint-plugin/README.md),
> for ease-of-use.**_

This package provides multiple eslint-configurations that configure popular
ESLint plugins. You should extend the appropriate config depending on your
use-case.

---

These configs provide an _**opinionated**_ set of rules that:

1. Help you adhere to best practices.
1. Help catch probable issue vectors in your code (common pitfalls and
   code-smells).
1. Maximize readability/understanding of your code.
1. Maximize (ease of) maintaining/refactoring your code.

> Any rules that might cause excessive errors and are not auto-fixable are set
> to "warn".

For these reasons, many of the rules are enabled and, of those, most are using
the recommended configuration except where it makes sense for achieving said
goals. When used with Prettier, conflicting rules are disabled.

> 💁‍♂️ You might also consider using
> [@therealklanni/prettier-config](https://github.com/therealklanni/prettier-config)

## Available configurations (and what they configure)

- `@therealklanni` _(base config must always be applied)_
- `@therealklanni/eslint-config/typescript`
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- `@therealklanni/eslint-config/react`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- `@therealklanni/eslint-config/jest`
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
  - [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
- `@therealklanni/eslint-config/node` or `@therealklanni/eslint-config/cli`
  - [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- `@therealklanni/eslint-config/prettier` _(Note: make sure this is always the
  **last** config)_
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

## Usage

1. Install required dependencies
   ```
   npm install -D @therealklanni/eslint-config eslint{,-plugin-import}
   ```
2. Optionally, view and install any additional dependencies, as needed
   ```
   # list dependencies
   yarn view @therealklanni/eslint-config peerDependencies

   # install what you need
   yarn add -D eslint-plugin-{jest,node,react} @therealklanni/prettier-config ...
   ```
2. Configure as shown here
   ```jsonc
   {
     // you only need to specify plugins not provided by these configs
     "plugins": ["some-unrelated-plugin"],
     "extends": [
       // add one or more configs, AFTER any unrelated configs
       "@therealklanni",
       "@therealklanni/eslint-config/typescript",
       "@therealklanni/eslint-config/jest"
     ],
     // override any rules, if needed
     "rules": {
       "@typescript-eslint/semi": ["error", "always"]
     }
   }
   ```
3. ???
4. Profit

### "Hard mode" example

DIY file globs. Allows for more control over how configs are applied.

```jsonc
{
  "extends": [
    // apply last
    "@therealklanni"
  ],
  "overrides": [
    // if you need other unrelated overrides, add them first
    {
      "files": ["*.js"],
      "extends": ["@therealklanni"],
      "rules": {
        "semi": ["error", "always"]
      }
    },
    {
      "files": ["*.ts"],
      "extends": [
        "some-unrelated-config",
        "@therealklanni",
        "@therealklanni/eslint-config/typescript"
      ],
      "rules": {
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/init-declarations": "off"
      }
    },
    {
      "files": ["**/__tests__/**"],
      "extends": ["@therealklanni/eslint-config/jest"],
      "rules": {
        "jest/no-if": "warn"
      }
    },
    // apply last when using Prettier config
    {
      "files": ["*.?(ts,js)"],
      "extends": ["@therealklanni/eslint-config/prettier"]
    }
  ]
}
```

### "Easy mode" example

Applies configs automatically wrapped in an `override` with a default `files`
glob.

```jsonc
{
  "extends": [
    "some-unrelated-config",
    // apply @therealklanni configs after unrelated configs
    "@therealklanni",
    "@therealklanni/eslint-config/jest/auto",
    "@therealklanni/eslint-config/typescript/auto",
    // applied globally
    "@therealklanni/eslint-config/prettier"
  ],
  "rules": {
    "semi": ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/init-declarations": "off",
    "jest/no-if": "warn"
  }
}
```

> Note: the `prettier`, `node`, and `cli` configs do not have an "auto" config,
> as these don't typically require an override.
