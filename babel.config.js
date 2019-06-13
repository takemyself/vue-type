module.exports = {
  presets: [[
    '@vue/app',
    {
      "targets": {
        "ie": "11"
      },
      useBuiltIns: 'entry',
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ]
    }
    // {
    //     useBuiltIns: 'entry',
    // }
  ]],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-syntax-jsx",
    "dynamic-import-node"
  ]
}