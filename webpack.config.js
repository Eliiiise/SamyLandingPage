const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

config = {
    entry: './src/js/index.js',
    output: { // sortie
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'), // cherche le chemin absolu de dost
    },

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:
                    {
                        loader : 'file-loader',
                        options : {
                            context: path.join(__dirname, '/src'),
                            name: '[path][name].[ext]',
                            esModule: false,
                        }
                    }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use:
                    {
                        loader : 'file-loader',
                        options : {
                            name: '[path][name].[ext]',
                        }
                    }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename:'index.html'
        }),
    ]
};

module.exports = config;
