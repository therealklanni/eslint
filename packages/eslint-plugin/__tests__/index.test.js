'use strict'

const eslintPlugin = require('../lib')

describe('@therealklanni/eslint-plugin', () => {
  it('provides eslint configs', () => {
    expect(eslintPlugin.configs).toMatchSnapshot()
  })
})
