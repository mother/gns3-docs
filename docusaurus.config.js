module.exports = {
   title: 'GNS3 Documentation',
   tagline: 'The official guide and reference for GNS3',
   url: 'https://mother.github.io',
   baseUrl: '/',
   favicon: 'img/favicon.ico',
   organizationName: 'mother', // Usually your GitHub org/user name.
   projectName: 'gns3-docs', // Usually your repo name.
   themeConfig: {
      googleAnalytics: {
         trackingID: 'UA-55817127-4',
         anonymizeIP: false
      },
      algolia: {
         apiKey: 'a83755c0872ca3a1d4a8af1ad443d037',
         indexName: 'gns3',
         algoliaOptions: {}, // Optional, if provided by Algolia
      },
      disableDarkMode: true,
      navbar: {
         logo: {
            alt: 'GNS3 Docs',
            src: 'img/logocolour.png'
         },
         links: [
            {
               to: 'docs/',
               activeBasePath: 'docs',
               label: 'Documentation',
               position: 'left'
            }, {
               href: 'https://gns3.com/marketplace/appliances',
               label: 'Appliances',
               position: 'right'
            }, {
               href: 'https://gns3.com',
               label: 'GNS3.com',
               position: 'right'
            }
         ]
      },
      footer: {
         style: 'dark',
         links: [
            {
               title: 'Docs',
               items: [
                  {
                     label: 'Documentation',
                     to: 'docs/'
                  }
               ]
            }, {
               title: 'Visit Us',
               items: [
                  {
                     label: 'GNS3 Community',
                     href: 'https://gns3.com/community'
                  }, {
                     label: 'GNS3 Academy',
                     href: 'https://academy.gns3.com'
                  }, {
                     label: 'GNS3 Certification',
                     href: 'https://gns3.com/training'
                  }
               ]
            }, {
               title: 'Connect',
               items: [
                  {
                     label: 'GitHub',
                     href: 'https://github.com/facebook/docusaurus'
                  }
               ]
            }
         ],
         copyright: `Copyright © ${new Date().getFullYear()} Galaxy Technologies LLC.`
      }
   },
   plugins: ['@docusaurus/plugin-google-analytics'],
   presets: [
      [
         '@docusaurus/preset-classic', {
            docs: {
               showReadingTime: true,
               homePageId: 'getting-started/what-is-gns3',
               sidebarPath: require.resolve('./sidebars.js'),
               editUrl: 'https://github.com/mother/gns3-docs/blob/master/'
            },
            theme: {
               customCss: require.resolve('./src/css/custom.css')
            }
         }
      ]
   ]
};
