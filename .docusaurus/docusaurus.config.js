export default {
  "plugins": [
    "@docusaurus/plugin-google-analytics"
  ],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "googleAnalytics": {
      "trackingID": "UA-55817127-4",
      "anonymizeIP": false
    },
    "algolia": {
      "apiKey": "6d6ea1a0fd210184b95ba9a589e11b17",
      "appId": "RM22375DTG",
      "indexName": "gns3",
      "algoliaOptions": {}
    },
    "disableDarkMode": true,
    "navbar": {
      "logo": {
        "alt": "GNS3 Docs",
        "src": "img/logocolour.png"
      },
      "links": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Documentation",
          "position": "left"
        },
        {
          "href": "https://gns3.com/marketplace/appliances",
          "label": "Appliances",
          "position": "right"
        },
        {
          "href": "https://gns3.com",
          "label": "Community",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Documentation",
              "to": "docs/"
            }
          ]
        },
        {
          "title": "Visit Us",
          "items": [
            {
              "label": "GNS3 Community",
              "href": "https://gns3.com/community"
            },
            {
              "label": "GNS3 Academy",
              "href": "https://academy.gns3.com"
            },
            {
              "label": "GNS3 Certification",
              "href": "https://gns3.com/training"
            }
          ]
        },
        {
          "title": "Connect",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Galaxy Technologies LLC."
    }
  },
  "title": "GNS3 Documentation",
  "tagline": "The official guide and reference for GNS3",
  "url": "https://mother.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "mother",
  "projectName": "gns3-docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showReadingTime": true,
          "homePageId": "getting-started/what-is-gns3",
          "sidebarPath": "/Users/stevenyuen/Sites/gns3-docs/sidebars.js",
          "editUrl": "https://github.com/mother/gns3-docs/blob/master/"
        },
        "theme": {
          "customCss": "/Users/stevenyuen/Sites/gns3-docs/src/css/custom.css"
        }
      }
    ]
  ]
};