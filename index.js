const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();


passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, accessToken => {
  console.log(accessToken);
}));
//the strings are not random google has a list of strings that you can ask for
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));




//this tells us which port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
