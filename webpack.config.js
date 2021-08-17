
const webpack = require('webpack');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require('path');


//basic webpack configuration needs 3 properties- entry, output and mode
// 1st. entry is root of the bundle and the beginning of the dependency graph
// 2nd. - Output- bundle that code, and output that bundled code to a folder we specify
// 3rd. mode- default will be production, but in this example we want it to run of development mode
const config = {
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name(file) {
                            return '[path][name].[ext]'
                        },
                        publicPath: function (url) {
                            return url.replace('../', '/assets/')
                        }
                    }
                },
                //put the loader right after the 'use' {} and in between the [] 
                {
                    loader: 'image-webpack-loader'
                }
            ]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", //the report outpus to a html file in the dist folder
        })
    ],
    mode: 'development'
};

module.exports = config;