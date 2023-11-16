import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  primaryHue: 287,
  logo: (
    <>
      <svg
        height="40"
        viewBox="0 0 666.66669 666.66669"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeWidth="1.33333">
          <path
            d="m332.66668 418.66668h-84.66667v-85.33334-85.33333h84.66667 84.66667v-85.33334-85.333334h85.33333 85.33334v85.333334 85.33334h-85.33334-85.33333v85.33333 85.33334z"
            fill="#fef400"
          />
          <path
            d="m248.00001 589.33335h-170.666674v-170.66667-170.66667h85.333334 85.33334v-85.33334-85.333334h84.66667 84.66667v85.333334 85.33334h85.33333 85.33334v85.33333 85.33334h-84.66667-84.66667v85.33334 85.33333zm84.66667-170.66667h84.66667v-85.33334-85.33333h-84.66667-84.66667v85.33333 85.33334z"
            fill="#fe6565"
          />
        </g>
      </svg>
      <span className="ml-2 text-2xl font-semibold">Developer</span>
    </>
  ),
  project: {
    link: "https://github.com/FyraLabs/devdocs",
  },
  chat: {
    link: "https://discord.gg/BHNfGewTXX",
  },
  docsRepositoryBase: "https://github.com/FyraLabs/devdocs/tree/main",
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
  useNextSeoProps() {
    const { frontMatter } = useConfig();

    return {
      titleTemplate: "%s – Fyra Developer",
      description:
        frontMatter.description ?? "The Fyra Developer Documentation",
      openGraph: {
        images: [
          {
            url: "https://fyralabs.com/logo.png",
          },
        ],
      },
    };
  },
  head: (
    <>
      <meta name="theme-color" content="#c800ff" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="Fyra Developer" />
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    </>
  ),
};

export default config;
