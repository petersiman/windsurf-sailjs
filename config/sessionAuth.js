module.exports.sessionAuth = function(req, res, next) {
  if(req.user) {
    return next();
  }
  res.redirect('/login');
};