const path = require('path');
const webpack = require('webpack');

//basic webpack configuration needs 3 properties- entry, output and mode
// 1st. entry is root of the bundle and the beginning of the dependency graph
// 2nd. - Output- bundle that code, and output that bundled code to a folder we specify
// 3rd. mode- default will be production, but in this example we want it to run of development mode
module.exports = {
entry: './assets/js/script.js', 
output: {
    path: path.resolve(__dirname, 'dist'),
filename: 'main.bundle.js'
},
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
],
mode: 'development'
};