const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
    "@storybook/addon-a11y"
  ],
  "framework": {
    "name": "@storybook/html-webpack5",
    "options": {}
  },
  "docs": {
    "docsPage": "automatic",
    "defaultName": "Docs",
  },
  "features": {
    "interactionsDebugger": true
  }
}
