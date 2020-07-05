module.exports = {
  title: 'GNS3 Docs',
  tagline: 'The tagline of my site',
  url: 'https://mother.github.io',
  baseUrl: '/gns3-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'mother', // Usually your GitHub org/user name.
  projectName: 'gns3-docs', // Usually your repo name.
  themeConfig: {
     algolia: {
         apiKey: 'a83755c0872ca3a1d4a8af1ad443d037',
         indexName: 'gns3',
         algoliaOptions: {}, // Optional, if provided by Algolia
     },
    navbar: {
      // title: 'My Site',
      logo: {
        alt: 'GNS3 Docs',
        src: 'img/logocolour.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
       },
       {
         to: 'docs/',
         activeBasePath: 'docs',
         label: 'Contribute',
         position: 'left',
      },
      {
        to: 'docs/',
        activeBasePath: 'docs',
        label: 'Appliances',
        position: 'left',
     },
        {
          href: 'https://gns3.com',
          label: 'GNS3.com',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Galaxy Technologies LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
           showReadingTime: true,
          // path: 'haha',
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started/what-is-gns3',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            // 'https://github.com/facebook/docusaurus/edit/master/website/',
            'https://github.com/mother/gns3-docs/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
