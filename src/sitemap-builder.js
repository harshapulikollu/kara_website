require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./sitemap-routes').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://www.chillaavo.com')
          .save('./public/sitemap.xml')
  );