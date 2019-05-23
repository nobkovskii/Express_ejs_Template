module.exports = function(req, res, next) {
  var userName = req.session.user_name;
  if (userName) {
    res.locals.user = userName
  }
  next();
};
