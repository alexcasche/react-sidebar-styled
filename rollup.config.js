import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import postcss from 'rollup-plugin-postcss'
import cssnested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    external(),
    postcss({
      autoModules: true,
      plugins: [ cssnested(), cssnext(), cssnano() ]
    }),
    url(),
    babel({
      exclude: [ 'node_modules/**' ]
    }),
    resolve(),
    commonjs()
  ]
}
