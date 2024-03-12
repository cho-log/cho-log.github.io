// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cholog Study - 초록 스터디',
  tagline: '함께 성장하는 학습 커뮤니티',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://cho-log.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cho-log', // Usually your GitHub org/user name.
  projectName: 'cho-log.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.ico',
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Cholog Study',
        logo: {
          alt: 'Cholog Study',
          src: 'img/logo.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Learning Test',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/cho-log",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      head: [
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100..900&display=swap',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'stylesheet',
            href: 'https://cdn.lineicons.com/4.0/lineicons.css',
          },
        }
      ],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learning test',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6XkAFe8DwW',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cho-log',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '우아한테크코스',
                href: 'https://woowacourse.io',
              },
              {
                label: 'NEXTSTEP',
                href: 'https://edu.nextstep.camp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cholog Study, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'kotlin'],
      },
    }),
};

export default config;
