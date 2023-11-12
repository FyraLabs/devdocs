const { BUNDLED_LANGUAGES, getHighlighter } = require("shiki");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    rehypePrettyCodeOptions: {
      getHighlighter: (options) =>
        getHighlighter({
          ...options,
          langs: [
            ...BUNDLED_LANGUAGES,
            // From https://github.com/1dot75cm/vscode-rpm-spec, thanks!
            {
              id: "spec",
              scopeName: "source.spec",
              aliases: ["rpmspec"],
              path: "../../public/spec.json",
            },
          ],
        }),
    },
  },
});

module.exports = withNextra();
