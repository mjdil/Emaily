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
  callbackURL: '/auth/google/callback',
  proxy: true

},
async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({googleId:profile.id})

    if (existingUser){
      //we aalredy have record
      done(null, existingUser); //existinf user is the userid
    }
    else{
    const user = await  new User({ googleId : profile.id}).save();// this creates a new model instance
    done (null, user);
    }

}));
