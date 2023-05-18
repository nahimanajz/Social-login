const passport = require('passport')
var MicrosoftStrategy = require('passport-microsoft').Strategy;

passport.use( new MicrosoftStrategy({
    clientID: process.env.MICROSOFT_CLIENT_ID,
    clientSecret:process.env.MICROSOFT_CLIENT_SECRET,
    callbackURL:'http://localhost:7878/auth/microsoft/redirect',
    scope:['user.read'],
    tenant: 'common'
},(accessToken, refreshToken, profile, done) => {
    console.log("callback is invoked ")
    console.log(profile)
}
))
