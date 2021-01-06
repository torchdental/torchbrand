const path = require('path');

module.exports = {
  watch: true,
  entry: './style_guide/js/app.js',
  output: {
    path: path.resolve(__dirname, 'style_guide'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
};
