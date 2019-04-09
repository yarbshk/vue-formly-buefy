const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const environment = process.env.NODE_ENV || 'development'
const debug = environment === 'development'

const envs = {
  production: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin({
        filename: '[name].bundle.css',
        allChunks: true
      })
    ]
  },
  development: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      }
    ],
    plugins: []
  }
}

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      ...debug ? envs.development.rules : envs.production.rules,
      {
        test: /\.js$/,
        exclude: /(node_modules|assets)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: !debug,
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      }
    ]
  },
  plugins: [
    ...debug ? envs.development.plugins : envs.production.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(environment)
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}
