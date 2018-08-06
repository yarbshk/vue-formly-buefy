const webpack = require('webpack')
const path = require('path')
const version = require('./package.json').version

const banner = 'VueFormlyBuefy v' + version + '\n' +
               '(c) 2017 Yuriy Rabeshko\n' +
               'Released under the MIT License.'

const rules = [
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

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.BannerPlugin({
    banner: banner
  })
]

const resolve = {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}

module.exports = [
  {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'vue-formly-buefy.min.js',
      library: 'VueFormlyBuefy',
      libraryTarget: 'umd'
    },
    module: { rules },
    plugins: [
      ...plugins,
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        warnings: false
      })
    ],
    resolve
  },
  {
    entry: path.resolve(__dirname, 'src/controls'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'vue-formly-buefy-controls.min.js',
      library: 'VueFormlyBuefyControls',
      libraryTarget: 'umd'
    },
    module: { rules },
    plugins: [
      ...plugins,
      new webpack.optimize.UglifyJsPlugin()
    ],
    resolve
  }
]
