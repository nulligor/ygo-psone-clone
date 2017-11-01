exports.bindSocket = function bindSocket(io, socket) {
    return functionHandler => functionHandler.bind({ io, socket });
};
 
exports.globalConfigs = {
    port: 8080,
    host: "localhost",
    path: `http://localhost:8080/` 
};
