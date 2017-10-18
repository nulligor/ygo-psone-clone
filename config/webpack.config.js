const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
const eslintFormatter = require("react-dev-utils/eslintFormatter");
const autoprefixer = require("autoprefixer");

const paths = {
    root: path.join(__dirname, ".."),
    src: path.join(__dirname, "..", "src"),
    build: path.join(__dirname, "..", "build"),
    nodeModules: path.join(__dirname, "..", "node_modules")
};

module.exports = {
    //  (ripfoghorn) 
    //  https://github.com/webpack/webpack/tree/master/examples/source-map
    devtool: "cheap-module-source-map",
    context: paths.root,
    entry: [
        //  (ripfoghorn) 
        //  https://github.com/facebookincubator/create-react-app/tree/master/packages/react-error-overlay
        require.resolve("react-error-overlay"),
        path.join(paths.src, "app.js")
    ],
    output: {
        path: paths.build,
        filename: "static/js/bundle.js",
        chunkFilename: "static/js/[name].chunk.js",
        publicPath: "/"
    },
    resolve: {
        //  (ripfoghorn) where to look for modules, and supported extensions for them
        modules: ["src", "node_modules"],
        extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx"],
    },
    module: {
        rules: [
            //  (ripfoghorn) linter before Babel
            {
                test: /\.(js|jsx)$/,
                enforce: "pre",
                use: [{
                    options: {
                        formatter: eslintFormatter,
                        eslintPath: require.resolve("eslint")
                    },
                    loader: require.resolve("eslint-loader")
                }],
                include: paths.src
            },
            {
                // (ripfoghorn) loaders image/js/css 
                oneOf: [{
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve("url-loader"),
                        options: {
                            limit: 10000,
                            name: "static/media/[name].[hash:8].[ext]",
                        },
                    },
                    {
                        // (ripfoghorn) Babel for hipster JS
                        test: /\.(js|jsx)$/,
                        include: paths.src,
                        loader: require.resolve("babel-loader"),
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    // (ripfoghorn) create-react-app: 
                    // "postcss" loader applies autoprefixer to our CSS.
                    // "css" loader resolves paths in CSS and adds assets as dependencies.
                    // "style" loader turns CSS into JS modules that inject <style> tags.
                    {
                        test: /\.css$/,
                        use: [require.resolve("style-loader"), {
                                loader: require.resolve("css-loader"),
                                options: {
                                    importLoaders: 1
                                }
                            },
                            {
                                loader: require.resolve("postcss-loader"),
                                options: {
                                    // (ripfoghorn) create-react-app: 
                                    // Necessary for external CSS imports to work
                                    // https://github.com/facebookincubator/create-react-app/issues/2677
                                    ident: "postcss",
                                    plugins: () => [require("postcss-flexbugs-fixes"), autoprefixer({
                                        browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"],
                                        flexbox: "no-2009"
                                    }), ],
                                }
                            }
                        ]
                    },
                    {
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new WatchMissingNodeModulesPlugin(paths.nodeModules),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: "src/index.html"
        })
    ],
    performance: {
        hints: false,
    }
}