const path = require('path') //nodejs
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode
    mode: 'development', // production
    // entry 
    // entry: path.resolve(__dirname, './src/app.js'),
    entry: {
        app: path.resolve(__dirname, './src/app.js'),
        about: path.resolve(__dirname, './src/about.js'),

    },


    // output 
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            // title 
            title: 'Webpack 5',
            // filename 
            filename: 'index.html',
            // templete 
            template: './src/temp.html',
            chunks: ['app']

        }),
        new HtmlWebpackPlugin({
            // title 
            title: 'About ',
            // filename 
            filename: 'about.html',
            // templete 
            template: './src/tempAbout.html',
            chunks: ['about']

        })
    ],
    // loaders
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],

    },


}