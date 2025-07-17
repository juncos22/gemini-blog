import { Router } from "express";
import AuthController from "../controllers/authController";
import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email", "openid"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/auth/success",
    failureRedirect: "/api/auth/failure",
  })
);

router.get("/success", (req, res) => {
  // console.log(req.user);
  if (!req.user) {
    res.status(401).json({ message: "User not authenticated" });
    return;
  }
  const token = jwt.sign(req.user, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(200).json({
    message: "Login successful",
    token,
  });
});

router.get("/failure", (req, res) => {
  res.status(401).json({
    message: "Login failed",
  });
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Session destruction failed" });
      }
    });
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logout successful" });
  });
});

export default router;
