exports.bindSocket = function bindSocket(io, socket) {
    return functionHandler => functionHandler.bind({ io, socket });
};
  