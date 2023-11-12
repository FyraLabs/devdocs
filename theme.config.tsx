import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Fyra Devdocs</span>,
  project: {
    link: "https://github.com/FyraLabs/devdocs-next",
  },
  chat: {
    link: "https://discord.gg/BHNfGewTXX",
  },
  docsRepositoryBase: "https://github.com/FyraLabs/devdocs-next",
  footer: {
    text: (
      <span>
        Made with love by catgirls
        <br />
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://fyralabs.com" target="_blank">
          Fyra Labs
        </a>
      </span>
    ),
  },
};

export default config;
