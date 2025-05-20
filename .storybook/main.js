

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {
      "builder": {
        "name": "@storybook/builder-webpack5",
        "options": {
          "outputDir": ".next/storybook"
        }
      }
    }
  },
  "staticDirs": [
    "../public"
  ]
};
export default config;