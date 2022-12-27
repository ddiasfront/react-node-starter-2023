// .storybook/main.js

module.exports = {
  addons: ["@storybook/addon-essentials"],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(js|mdx|tsx)"],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  features: {
    previewMdx2: true,
  },
};
