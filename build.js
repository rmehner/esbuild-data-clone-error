const { buildSync } = require('esbuild')

buildSync({
  entryPoints: ['./src/index.js'],
  outfile: './dist/index.js',
  watch: true
})
