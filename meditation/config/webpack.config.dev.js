const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

const config = {};

config.mode = 'development';
config.devtool = 'eval';
config.entry = ['webpack-hot-middleware/client'];

config.output = {
  filename: '[name].js'
};

config.module = {
  rules: [
    {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader',
      ],
    },
    {
      test: /\min.css$/,
      use: [
        'style-loader', 
        'css-loader'
      ]
    }
  ]
};

config.plugins = [
  new ProgressBarPlugin({
    format: 'Build [:bar] :percent (:elapsed seconds)',
    clear: false
  }),
  new MiniCssExtractPlugin({
    filename: 'styles.css',
    chunkFilename: '[id].css'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin()
];

config.stats = 'minimal';

module.exports = config;