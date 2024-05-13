const path = require('path');

const defaults = {
  resolve: {
    extensions: ['*', '.mjs', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
};

module.exports = [
  {
    ...defaults,
    mode: 'production',
    entry: './agGridConfig.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'agGridBundle.umd.js',
      library: ['agGrid'],
      libraryTarget: 'umd',
    },
  }
];
