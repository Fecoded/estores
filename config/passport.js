const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/account",
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
        };

        try {
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            const payload = { user: { id: user.id } };
            console.log(payload);
            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                return res.status(201).json({ success: true, data: token });
              }
            );
  
            done(null, user);
          } else {
            user = await User.create(newUser);
            const payload = { user: { id: user.id } };
            console.log(payload);
            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                return res.status(201).json({ success: true, data: token });
              }
            );
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
