module.exports = {
   title: 'GNS3 Documentation',
   tagline: 'The official guide and reference for GNS3',
   url: 'https://mother.github.io',
   baseUrl: '/',
   favicon: 'img/favicon.ico',
   organizationName: 'mother',
   projectName: 'gns3-docs',
   themeConfig: {
      algolia: {
         apiKey: '75bf7dd136b92cb76d52b7ef8de3576f',
         appId: '1WIL6RAPZV',
         indexName: 'gns3',
         algoliaOptions: {},
      },
      colorMode: {
        disableSwitch: true
      },
      navbar: {
         logo: {
            alt: 'GNS3 Docs',
            src: 'img/logocolour.png'
         },
         items: [
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
               label: 'Community',
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
   presets: [
      [
         '@docusaurus/preset-classic', {
            gtag: {
               trackingID: 'G-D2TYZDQ4ZW',
               anonymizeIP: false,
            },
            docs: {
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
