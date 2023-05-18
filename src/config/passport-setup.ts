import passport from "passport";
import {
  Strategy as GoogleStrategy,
  StrategyOptionsWithRequest,
} from "passport-google-oauth20";

function gooogleAuth(){

  try {
    //options for the strategy
    const options: StrategyOptionsWithRequest = {
      callbackURL: "http://localhost:7878/auth/google/redirect",
      clientID: process.env.GOOGLE_SIGNIN_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SIGNIN_CLIENT_SECRET || "",
      passReqToCallback: true,
    };
  
    passport.use(
      new GoogleStrategy(
        options,
        (
          req,
          acessToken: string,
          refreshToken: string,
          profile: object,
          done: Function
        ) => {
          // Identified issue redirection is not working
          // passport callback function
          //TODO: CHECK if user exist then save user into db happens here
          //console.log("Passport callback function fired")
          // NB: SIGNIN AND SIGNUP ARE HANDLED HERE NOTHING MATCH
         // console.log(profile);
  
          done(null, profile);
        }
      )
    );
  } catch (error) {
    console.log(error);
  }
}
passport.serializeUser((user: object, done: Function) => done(null, user));
passport.deserializeUser((user: object, done: Function) => done(null, user));

export default gooogleAuth;
