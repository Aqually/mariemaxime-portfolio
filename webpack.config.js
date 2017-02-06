
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },

    plugins:[
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings: true
        }
    }),
    HTMLWebpackPluginConfig
    ],

    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
          { test: /\.css$/, loader: "style-loader!css-loader"},
          { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
          { test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' }
        ]
    },
};
