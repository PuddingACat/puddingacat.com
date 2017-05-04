const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoPrefixer = require('autoprefixer');

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || '8080',
  ASSET_PATH: process.env.ASSET_PATH || '/',
};
const PATHS = {
  src: path.resolve(__dirname, 'src'),
  public: path.resolve(__dirname, 'public'),
  build: path.resolve(__dirname, 'dist'),
};

const devConfig = {
  entry: {
    root: PATHS.src,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
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
      test: /\.(png|jpg|svg|eot|ttf|woff|woff2)$/,
      use: 'url-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.build]),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.png',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      mobile: true,
      title: 'Pudding A Cat',
      appMountId: 'root',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: env.HOST,
    port: env.PORT,
    overlay: {
      errors: true,
    },
  },
  devtool: 'cheap-module-source-map',
};

const prodConfig = {
  entry: {
    root: PATHS.src,
    vendor: [
      'react',
      'react-dom',
      'react-tap-event-plugin'],
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[chunkhash:8].js',
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
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            importLoaders: 2,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [AutoPrefixer],
          },
        }, 'less-loader'],
      }),
    }, {
      test: /\.(png|jpg|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 20000,
          name: 'image/[name].[hash:8].[ext]',
        },
      },
    }, {
      test: /\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'font/[name].[hash:8].[ext]',
        },
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.build], {
      root: process.cwd(),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.BannerPlugin({
      banner: `Compiled on ${new Date().toDateString()} by Sean with ❤️`,
      raw: false,
      entryOnly: false,
      exclude: /vendor/,
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.png',
      prefix: 'icons-[hash:8]/',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      mobile: true,
      title: 'Pudding A Cat',
      appMountId: 'root',
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash:8].css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
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
