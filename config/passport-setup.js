const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
try {
    
    passport.use(
        new GoogleStrategy({
        //options for the strategy
        callbackURL:'http://localhost:7878/auth/google/redirect',
        clientID: process.env.GOOGLE_SIGNIN_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SIGNIN_CLIENT_SECRET
    },(acessToken, refreshToken, profile, done)=>{
        // passport callback function
        //TODO: CHECK if user exist then save user into db happens here 
        console.log("Passport callback function fired")
        console.log(profile)
    })
    
    )
} catch (error) {
    console.log(error)
}