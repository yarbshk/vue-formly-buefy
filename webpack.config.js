const webpack = require('webpack')
const path = require('path')
const version = require('./package.json').version

const banner = 'VueFormlyBuefy v' + version + '\n' +
               '(c) 2017 Yuriy Rabeshko\n' +
               'Released under the MIT License.'

const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.BannerPlugin({
      banner: banner
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  }
}

module.exports = [
  {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'vue-formly-buefy.js',
      library: 'VueFormlyBuefy',
      libraryTarget: 'umd'
    },
    module: common.module,
    plugins: [
      ...common.plugins,
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: false,
        mangle: false
      })
    ],
    resolve: common.resolve
  },
  {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'vue-formly-buefy.min.js',
      library: 'VueFormlyBuefy',
      libraryTarget: 'umd'
    },
    module: common.module,
    plugins: [
      ...common.plugins,
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        warnings: false
      })
    ],
    resolve: common.resolve
  },
  {
    entry: path.resolve(__dirname, 'src/plain-controls'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'plain-controls.js',
      library: 'VfbPlainControls',
      libraryTarget: 'umd'
    },
    module: common.module,
    plugins: [
      ...common.plugins,
      new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: common.resolve
  }
]
