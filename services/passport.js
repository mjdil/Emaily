const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); // 1 arg means we are fetching something out of mongoose

passport.serializeUser((user, done) => {

  done(null, user.id)
});

passport.deserializeUser((id, done)=>{

  User.findById()
  .then(user => { //user is what is found
    done(null, user);
  ;

});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({googleId:profile.id})
  .then ((existingUser)=>{
    if (existingUser){
      //we aalredy have record
      done(null, existingUser); //existinf user is the userid
    }
    else{
      new User({ googleId : profile.id}).save();// this creates a new model instance
      .then(user => done(null,user));

    }

  })

}));
