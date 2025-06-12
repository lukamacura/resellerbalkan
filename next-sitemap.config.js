// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.resellerblkn.com',
  generateRobotsTxt: true,
  outDir: './public',          // ⬅ obavezno – fajlovi idu u /public
  exclude: ['/api/*'],         // API rute ne treba u sitemap
  // Dodaj root (/) ručno; next-sitemap ponekad preskoči /index.js
  additionalPaths: async () => [
    { loc: '/', lastmod: new Date().toISOString() },
  ],
  // (opciono) sve ostale stranice hvata default transform
};
