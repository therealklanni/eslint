# `@therealklanni/eslint-plugin`

> This plugin provides configs from
> [@therealklanni/eslint-config](../eslint-config/README.md)

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
the recommended configuration except where it makes sense for achieving said goals.
When used with Prettier, conflicting rules are disabled.

> 💁‍♂️ You might also consider using
> [@therealklanni/prettier-config](https://github.com/therealklanni/prettier-config)

## Available configurations

- `plugin:@therealklanni` _(base config must always be applied)_
- `plugin:@therealklanni/typescript`
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- `plugin:@therealklanni/react`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- `plugin:@therealklanni/jest`
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
  - [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
- `plugin:@therealklanni/node` or `plugin:@therealklanni/cli`
  - [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- `plugin:@therealklanni/prettier` _(Note: make sure this is always the **last**
  config)_
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

## Usage

1. Install required dependencies
   ```
   npm install -D @therealklanni/eslint-{plugin,config} eslint{,-plugin-import}
   ```
2. Optionally, view and install any additional dependencies, as needed
   ```
   # list dependencies
   npm view @therealklanni/eslint-plugin peerDependencies

   # install what you need
   npm install -D eslint-plugin-{jest,node,react} @therealklanni/prettier-config ...
   ```
3. Configure as shown here
   ```jsonc
   {
     // the only plugin you need to specify is this one
     // or any plugin not provided by this one
     "plugins": ["@therealklanni"],
     "extends": [
       // add one or more configs, AFTER any other configs
       "plugin:@therealklanni/typescript",
       "plugin:@therealklanni/jest"
     ],
     // override any rules, if needed
     "rules": {
       "@typescript-eslint/semi": ["error", "always"]
     }
   }
   ```
4. ???
5. Profit

### "Hard mode" example

DIY file globs. Allows for more control over how configs are applied.

```jsonc
{
  "plugins": ["@therealklanni"],
  "extends": [
    "some-unrelated-config",
    // apply after unrelated configs
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
        // apply after unrelated configs
        "@therealklanni",
        "plugin:@therealklanni/typescript"
      ],
      "rules": {
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/init-declarations": "off"
      }
    },
    {
      "files": ["**/__tests__/**"],
      // base config will get applied by above overrides
      "extends": ["plugin:@therealklanni/jest"],
      "rules": {
        "jest/no-if": "warn"
      }
    },
    // Apply last when using Prettier config
    {
      "files": ["*.?(ts,js)"],
      "extends": ["plugin:@therealklanni/prettier"]
    }
  ]
}
```

### "Easy mode" example

Applies configs automatically wrapped in an `override` with a default `files`
glob.

```jsonc
{
  "plugins": ["@therealklanni"],
  "extends": [
    "some-unrelated-config",
    // apply @therealklanni configs after unrelated configs
    "@therealklanni",
    "plugin:@therealklanni/jest/auto",
    "plugin:@therealklanni/typescript/auto",
    // applied globally
    "plugin:@therealklanni/prettier"
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
