var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});
var config = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: __dirname + '/node_modules',
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};

module.exports = config;