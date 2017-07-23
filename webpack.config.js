const webpack = require('webpack')
const path = require('path')
const version = require('./package.json').version
const banner = "/**\n" +
               " * vue-formly-buefy v" + version + "\n" +
               " * https://github.com/yarbshk/vue-formly-buefy.git\n" +
               " * Released under the MIT License.\n" +
               " */\n"
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const environment = process.env.NODE_ENV || 'development'
const debug = environment === 'development'

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
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
  },
  {
    test: /\.(sass|scss|css)$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader']
    })
  }
]

const alias = {
  src: path.resolve(__dirname, 'src')
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
    module: {
      rules: rules
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(environment)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: false,
        mangle: false
      }),
      new ExtractTextPlugin({
        filename: 'vue-formly-buefy.css',
        allChunks: true
      }),
      new webpack.BannerPlugin({
        banner: banner,
        raw: true
      })
    ],
    resolve: {
      alias: alias
    }
  },
  {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'vue-formly-buefy.min.js',
      library: 'VueFormlyBuefy',
      libraryTarget: 'umd'
    },
    module: {
      rules: rules
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(environment)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.BannerPlugin({
        banner: banner,
        raw: true
      })
    ],
    resolve: {
      alias: alias
    }
  }
]
