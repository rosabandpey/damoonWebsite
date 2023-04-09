// /** @type {import('next').NextConfig} */
// const withLess = require("next-with-less");
// const withImages = require('next-images');

// module.exports = withImages();

// module.exports = withLess({
//   lessLoaderOptions: {
//     /* ... */
//   },
// });



// const withLess = require("next-with-less");

// module.exports = withLess({
//   lessLoaderOptions: {
//     /* ... */
//   },
// })

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}


module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}
