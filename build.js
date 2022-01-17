require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  loader: {
    '.js': 'jsx'
  },
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
    console.log('watching...', result)
}).catch(() => process.exit(1))