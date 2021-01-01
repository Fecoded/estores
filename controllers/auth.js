const passport = require("passport");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc      AUTH WITH GOOGLE
// @route     GET api/v1/auth/google
// @access    Public
exports.getAuthGoogle = passport.authenticate("google", {
  scope: ["profile"],
});

// @desc      AUTH WITH GOOGLE CALLBACK
// @route     GET api/v1/auth/google/callback
// @access    Public
(exports.getAuthGoogleCallback = passport.authenticate("google", {
  failureRedirect: "/",
})),
  (req, res) => {
    res.send("Login Success");
  };

// @desc      GET CURRENT LOGGED IN USER
// @route     GET api/v1/auth
// @access    Private
exports.getAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc      GET USERS
// @route     GET api/v1/auth/users
// @access    Private
exports.getUsers = async (req, res, next) => {
  try {
    let user = await User.findById(req.user.id);

    user = await User.find().sort({ createdAt: -1 });

    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc      AUTHENTICATE USER AND GET TOKEN
// @route     POST api/v1/auth
// @access    Public
exports.postAuth = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = { user: { id: user.id, role: user.role } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        return res.status(201).json({
          success: true,
          data: token,
        });
      }
    );
  } catch (err) {
    if (err.name === "ValidationError") {
      const msgs = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: msgs,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
