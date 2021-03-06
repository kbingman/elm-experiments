module.exports = {
    entry: './src/index.js',

    output: {
        path: './dist',
        filename: 'index.js'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.elm']
    },

    module: {
        loaders: [
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader'
            // },
            {
                test: /(\.html$|\.css$)/,
                exclude: /node_modules/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                loader: 'elm-webpack'
            }
        ],

        noParse: /\.elm$/
    },

    devServer: {
        inline: true,
        stats: 'errors-only'
    }
};
