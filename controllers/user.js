// @desc      REGISTER USER AND GENERATE TOKEN
// @route     POST api/user
// @access    Private
exports.postUser = (req, res, next) => {
  res.send('REGISTER USER AND GENERATE TOKEN');
  next();
};

// @desc      REGISTER ADMIN AND GENERATE TOKEN
// @route     POST api/user/admin
// @access    Private
exports.postAdmin = (req, res, next) => {
  res.send('REGISTER ADMIN AND GENERATE TOKEN');
  next();
};
