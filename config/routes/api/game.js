const uuid = require('uuid');

exports.generateNewGameId = function generateNewGameId(req, res) {
  setTimeout(() => {
    res.json({
      gameId: uuid.v4(),
    });
  }, 1000);
};
