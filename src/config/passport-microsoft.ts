import passport from "passport";
import {
  Strategy as MicrosoftStrategy,
  MicrosoftStrategyOptionsWithRequest,
} from "passport-microsoft";

passport.serializeUser((user: object, done: Function) => done(null, user));
passport.deserializeUser((user: object, done: Function) => done(null, user));

const options: MicrosoftStrategyOptionsWithRequest = {
  clientID: process.env.MICROSOFT_CLIENT_ID || "",
  clientSecret: process.env.MICROSOFT_CLIENT_SECRET || "",
  callbackURL: "http://localhost:7878/auth/microsoft/redirect",
  scope: ["user.read"],
  tenant: "common",
  passReqToCallback:true
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
export default passport;
