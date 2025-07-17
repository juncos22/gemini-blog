import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserModel from "../models/user";
import dotenv from "dotenv";
dotenv.config();
if (
  !process.env.GOOGLE_CLIENT_ID ||
  !process.env.GOOGLE_CLIENT_SECRET ||
  !process.env.GOOGLE_REDIRECT_URI
) {
  throw new Error(
    "Google OAuth credentials are not set in the environment variables"
  );
}
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URI,
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails } = profile;
      if (!emails || emails.length === 0) {
        return done(new Error("No email found"));
      }
      const email = emails[0].value;
      let user = UserModel.findByEmail(email);
      if (!user) {
        user = UserModel.create({
          name: displayName,
          email,
          googleId: id,
          // Assuming password is not required for Google users
        });
      }
      return done(null, user);
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  const user = UserModel.findById(id);
  done(null, user);
});

export default passport;
