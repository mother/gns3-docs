export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "algolia": {
      "apiKey": "a83755c0872ca3a1d4a8af1ad443d037",
      "indexName": "gns3",
      "algoliaOptions": {}
    },
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
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Contribute",
          "position": "left"
        },
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Appliances",
          "position": "left"
        },
        {
          "href": "https://gns3.com",
          "label": "GNS3.com",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2020 Galaxy Technologies LLC."
    }
  },
  "title": "GNS3 Docs",
  "tagline": "The tagline of my site",
  "url": "https://mother.github.io",
  "baseUrl": "/gns3-docs/",
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
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/stevenyuen/Sites/gns3-docs/src/css/custom.css"
        }
      }
    ]
  ]
};