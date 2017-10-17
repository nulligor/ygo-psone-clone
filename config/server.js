const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = 3000;
const webpack = require("webpack");
const config = require("./webpack.config.js");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

// gotta still check this out
const { bindSocket } = require('./utils');



// (ripfoghorn) middlewares
app.use(webpackMiddleware(compiler, {
    hot: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }));
app.use(webpackHotMiddleware(compiler));