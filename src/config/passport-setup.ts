import passport from "passport";
import {
  Strategy as GoogleStrategy,
  StrategyOptionsWithRequest,
} from "passport-google-oauth20";

import {
  Strategy as MicrosoftStrategy,
  MicrosoftStrategyOptionsWithRequest,
} from "passport-microsoft";

passport.serializeUser((user: object, done: Function) => done(null, user));
passport.deserializeUser((user: object, done: Function) => done(null, user));

class AuthService {
  public googleAuth(): void {
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

  public microsoftAuth(): void {

    const options: MicrosoftStrategyOptionsWithRequest = {
      clientID: process.env.MICROSOFT_CLIENT_ID || "",
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET || "",
      callbackURL: "http://localhost:7878/auth/microsoft/redirect",
      scope: ["user.read"],
      tenant: "common",
      passReqToCallback: true,
    };

    passport.use(
      new MicrosoftStrategy(
        options,
        (
          req: any,
          accessToken: string,
          refreshToken: string,
          profile: object,
          done: Function
        ) => {
          //TODO: verify and save this user into database
          done(null, profile);
        }
      )
    );
  }
}

export default new AuthService();
