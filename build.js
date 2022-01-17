require('esbuild').build({
  entryPoints: ['app.js'],
  bundle: true,
  outfile: 'out.js',
  loader: {
    '.js': 'jsx'
  },
  sourcemap: true,
}).catch(() => process.exit(1))