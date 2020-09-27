module.exports = {
  title: 'Zelda API',
  tagline: 'The ultimate fan-made The Legend of Zelda API!',
  url: 'https://docs.zelda-api.apius.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.png',
  organizationName: 'API-US', // Usually your GitHub org/user name.
  projectName: 'Zelda API', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Zelda API - Docs',
      logo: {
        alt: 'Zelda API logo',
        src: 'img/hyrule.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/deliton/zelda-api',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `This site is not filiate nor funded by Nintendo. It was made with the sole purpose of fun and knowledge. Zelda API ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
