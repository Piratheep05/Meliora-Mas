const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const deps = require('./package.json').dependencies
module.exports = (_, argv) => ({
    output: {
        publicPath: '/',
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
        port: 4000,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                // pdf added 04/08/2023
                test: /\.(png|jpe?g|gif|svg|pdf)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    // outputPath: 'assets/images',
                },
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto',
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'melioraa_ums',
            filename: 'remoteEntry.js',
            remotes: {},
            exposes: {},
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
    ],
})
