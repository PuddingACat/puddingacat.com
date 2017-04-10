const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || '8080',
  PUBLIC_URL: '',
};
const PATHS = {
  src: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public'),
  build: path.join(__dirname, 'dist'),
};

const devConfig = {
  entry: {
    root: PATHS.src,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      use: 'eslint-loader',
    }, {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /(node_modules)/,
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      }, {
        loader: 'less-loader',
        options: {
          noIeCompat: true,
        },
      }],
    }, {
      test: /\.(png|jpg|svg)$/,
      use: 'url-loader',
    }, {
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }],
    }],
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.build]),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Pudding A Cat',
      appMountId: 'root',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    host: env.HOST,
    port: env.PORT,
  },
  devtool: 'cheap-module-source-map',
};

const prodConfig = {
  entry: {
    root: PATHS.src,
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      use: 'eslint-loader',
    }, {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /(node_modules)/,
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader'/* , 'postcss-loader'*/],
      }),
    }, {
      test: /\.(png|jpg|svg)$/,
      use: 'url-loader',
    }, {
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }],
    }],
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.build]),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Pudding A Cat',
      appMountId: 'root',
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
  devtool: 'cheap-module-source-map',
};

module.exports = () => {
  if (env.NODE_ENV === 'development') {
    return devConfig;
  } else {
    return prodConfig;
  }
};
