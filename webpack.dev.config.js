const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    bundle: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
        './src/index',
    ],
    parser: './src/parsers/index',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: '/public/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src'),
    },{
      test: /\.json$/,
      loader: 'json-loader'
    },{
      test: /\.global\.(scss|css)$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader?sourceMap',
      ]
    },{
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader?sourceMap',
      ]
    },{
      test: /^((?!\.global).)*\.scss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'sass'
      ]
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.(eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }],
  },
  postcss: function () {
    return [autoprefixer];
  },
  sassLoader: {
    includePaths: ['node_modules', path.resolve(__dirname, "./src/style")]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
