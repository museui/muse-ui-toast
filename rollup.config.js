import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify';
import packageJson from './package.json';

const banner = '/* muse-ui-toast myron.liu version ' + packageJson.version + ' */';
const name = 'MuseUIToast';
export default {
  input: 'src/index.js',
  output: [{
    banner,
    file: 'dist/muse-ui-toast.js',
    format: 'umd',
    globals: {
      vue: 'Vue'
    },
    name
  }, {
    banner,
    file: 'dist/muse-ui-toast.common.js',
    format: 'cjs',
    name
  }, {
    banner,
    file: 'dist/muse-ui-toast.esm.js',
    format: 'es',
    name
  }],
  plugins: [
    resolve({ jsnext: true, main: true, browser: true }),
    commonjs(),
    babel({
      babelrc: false,
      include: 'src/**',
      runtimeHelpers: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ],
        'stage-2',
        'es2015-rollup'
      ]
    })
    // uglify()
  ],
  external: ['vue']
};
