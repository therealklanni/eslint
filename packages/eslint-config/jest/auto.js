module.exports = {
  plugins: ['jest-formatting'],
  extends: ['plugin:jest-formatting/strict'],
  rules: {
    'jest-formatting/padding-around-all': 'error'
  },
  overrides: [
    {
      files: [
        '**/__?(tests|mocks)__/**',
        '**/*?(.|_)test.*',
        '**/*Test.*',
        '**/*?(.|_)spec.*',
        '**/*Spec.*'
      ],
      extends: ['.']
    }
  ]
}
