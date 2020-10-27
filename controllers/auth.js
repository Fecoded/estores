const passport = require('passport');

// @desc      AUTH WITH GOOGLE
// @route     GET api/auth/google
// @access    Public
exports.getAuthGoogle = passport.authenticate('google', {
  scope: ['profile'],
});

// @desc      AUTH WITH GOOGLE CALLBACK
// @route     GET api/auth/google/callback
// @access    Public
(exports.getAuthGoogleCallback = passport.authenticate('google', {
  failureRedirect: '/',
})),
  (req, res) => {
    res.send('Login Success');
  };

// @desc      GET CURRENT LOGGED IN USER
// @route     GET api/auth
// @access    Private
exports.getAuth = (req, res, next) => {
  res.send('GET LOGGED IN USER');
  next();
};

// @desc      AUTHENTICATE USER AND GET TOKEN
// @route     POST api/auth
// @access    Public
exports.postAuth = (req, res, next) => {
  res.send('AUTHENTICATE USER AND GET TOKEN');
  next();
};

// @desc      GET CURRENT LOGGED IN USER(ADMIN)
// @route     GET api/auth/admin
// @access    Private
exports.getAdminAuth = (req, res, next) => {
  res.send('GET LOGGED IN ADMIN');
  next();
};

// @desc      AUTHENTICATE ADMIN AND GET TOKEN
// @route     POST api/auth/admin
// @access    Public
exports.postAdminAuth = (req, res, next) => {
  res.send(' AUTHENTICATE ADMIN AND GET TOKEN');
  next();
};
