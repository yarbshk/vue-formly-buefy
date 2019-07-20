const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sass|scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            vuenit: 'vuenit/lib/index.js',
            '@': path.resolve(__dirname, 'src')
        }
    }
}
