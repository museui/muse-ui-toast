const plugins = [
  require('autoprefixer')({
    browsers: [
      '> 1%',
      'last 5 versions',
      'ios >= 7',
      'android > 4.4',
      'not ie < 10'
    ]
  })
];
if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano')({
    safe: true
  }));
}

module.exports = {
  plugins: plugins
};
