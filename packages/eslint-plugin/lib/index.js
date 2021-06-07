'use strict'

const base = require('@therealklanni/eslint-config')
const jestConfig = require('@therealklanni/eslint-config/jest')
const nodeConfig = require('@therealklanni/eslint-config/node')
const nodeCliConfig = require('@therealklanni/eslint-config/cli')
const reactConfig = require('@therealklanni/eslint-config/react')
const typescriptConfig = require('@therealklanni/eslint-config/typescript')
const prettierConfig = require('@therealklanni/eslint-config/prettier')

module.exports = {
  configs: {
    base,
    jest: jestConfig,
    node: nodeConfig,
    cli: nodeCliConfig,
    react: reactConfig,
    typescript: typescriptConfig,
    prettier: prettierConfig
  }
}
