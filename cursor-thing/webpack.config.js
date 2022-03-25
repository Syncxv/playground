const webpack = require('webpack')
const path = require('path')
/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, './src/ts/index.ts'),
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/assets/js/'
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: 'ts-loader' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    compact: true
                }
            }
        ]
    },
    resolve: {
        modules: ['./src/ts', 'node_modules']
    }
}
