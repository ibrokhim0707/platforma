const { checkToken } = require("../utils/jsonwebtoken");

const isAuthed = (req, res, next) => {
  if (!req.cookies.token) {
    return res.status(401).json({
      message: "Permission denied!   Please, you must register first! ",
    });
  }

  checkToken(req.cookies.token, (err, data) => {
    if (err) {
      res.json({
        message: "Permission denied!   Please, you must register first!",
      });
    }
    req.user = data;
    next();
  });
};

module.exports = isAuthed;
