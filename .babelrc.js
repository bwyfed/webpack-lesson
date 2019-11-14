module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        }
      }
    ],
    '@babel/preset-react'
  ]
}