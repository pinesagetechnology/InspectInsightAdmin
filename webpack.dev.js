const path = require('path');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool:"inline-source-map",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'dts-css-modules-loader',
                        options: {
                            namedExport: true,
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3080,
        open: true, // Automatically open the browser
        historyApiFallback: true, // Support HTML5 History API based routing
    }
});