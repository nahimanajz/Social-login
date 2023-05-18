import passport from "passport";

passport.serializeUser((user: object, done: Function) => done(null, user));
passport.deserializeUser((user: object, done: Function) => done(null, user));

export default passport;
