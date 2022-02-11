export default {
  "title": "Zelda API",
  "tagline": "The ultimate fan-made The Legend of Zelda API!",
  "url": "https://docs.zelda-api.apius.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/logo.png",
  "organizationName": "API-US",
  "projectName": "Zelda API",
  "themeConfig": {
    "navbar": {
      "title": "Zelda API - Docs",
      "logo": {
        "alt": "Zelda API logo",
        "src": "img/hyrule.png"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/deliton/zelda-api",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "This site is not filiate nor funded by Nintendo. It was made with the sole purpose of fun and knowledge. Zelda API 2022. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\delit\\Documents\\codes\\deliton\\zelda-api-docs\\sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "C:\\Users\\delit\\Documents\\codes\\deliton\\zelda-api-docs\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};