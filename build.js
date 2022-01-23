// const cssModulesPlugin = require("esbuild-css-modules-plugin");

require('esbuild').build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: 'dist/main.js',
  loader: {
    '.js': 'jsx',
    '.png': 'file',
  },
  // plugins: [cssModulesPlugin()],
  // will want to remove for production builds
  sourcemap: true,
  // TODO: create separate prod and dev build files
  // will want to add for production builds
  // minify: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    },
  },
}).then(result => {
    console.log('watching...')
}).catch(() => process.exit(1))