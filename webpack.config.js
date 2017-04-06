const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';
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
    style: path.join(PATHS.src, 'main.less'),
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
      use: [{ loader: 'eslint-loader' }],
    }, {
      test: /\.(js|jsx)$/,
      use: [{ loader: 'babel-loader' }],
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        // options: {
        //   importLoaders: 1,
        // },
      }, {
        loader: 'less-loader',
        options: {
          noIeCompat: true,
        },
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Pudding A Cat',
      appMountId: 'root',
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: env.HOST,
    port: env.PORT,
  },
  devtool: 'eval-source-map',
};

const prodConfig = {

};

module.exports = () => {
  if (env.NODE_ENV === 'development') {
    return devConfig;
  } else {
    return prodConfig;
  }
};
