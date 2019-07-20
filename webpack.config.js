const webpack = require('webpack')
const path = require('path')
const version = require('./package.json').version
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

const banner = 'VueFormlyBuefy v' + version + '\n' +
    '(c) 2017 Yurii Rabeshko\n' +
    'Code released under the MIT License.'

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue-formly-buefy.min.js',
        library: 'VueFormlyBuefy',
        libraryTarget: 'umd'
    },
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
        new VueLoaderPlugin(),
        new webpack.BannerPlugin({
            banner: banner
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true
            })
        ]
    }
}
