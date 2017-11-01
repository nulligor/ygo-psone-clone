const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.js");
const compiler = webpack(config);

const PORT = 8080;
const { bindSocket } = require("./utils");
const game = require("./routes/api/game");
process.env.NODE_ENV = "development";

// (ripfoghorn) routes
app.post('/api/game/new', game.generateNewGameId);

// (ripfoghorn) middlewares (dev)
app.use(webpackMiddleware(compiler, {
    hot: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }));
app.use(webpackHotMiddleware(compiler));

// (ripfoghorn) serve
server.listen(PORT, 'localhost', (error) => {
  io.on('connection', (socket) => {
    // const bindSocketCurried = bindSocket(io, socket);
    // socket.on('gameJoin', bindSocketCurried(onGameJoinHandler));
    // socket.on('gameLeave', bindSocketCurried(onGameLeaveHandler));
    // socket.on('action', bindSocketCurried(onActionHandler));
  });
  if (error) {
    console.error(error);
  } else {
    console.info(`> Listening on http://localhost:${PORT}/`);
  }
});
