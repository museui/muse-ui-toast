import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

const name = packageJson.name;
const banner = `/* ${name} myron.liu version ${packageJson.version} */`;

const plugins = [
  resolve({ jsnext: true, main: true, browser: true }),
  commonjs(),
  babel({
    babelrc: false,
    include: ['src/**', 'node_modules/muse-ui/src/**'],
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
];

export default [
  {
    input: 'src/index.js',
    output: [
      {
        banner,
        file: `dist/${name}.common.js`,
        format: 'cjs'
      },
      {
        banner,
        file: `dist/${name}.esm.js`,
        format: 'es'
      }
    ],
    plugins: [
      postcss({ extensions: ['.less'], extract: `dist/${name}.css` }),
      ...plugins
    ],
    external: ['vue']
  },
  {
    input: 'src/umd.js',
    output: {
      banner,
      file: `dist/${name}.js`,
      format: 'umd',
      globals: {
        vue: 'Vue'
      },
      name: 'MuseUIToast'
    },
    plugins: [
      postcss({ extensions: ['.less'], extract: `dist/${name}.all.css` }),
      ...plugins,
      uglify()
    ],
    external: ['vue']
  }
];

