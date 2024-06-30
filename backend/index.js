const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

const connectDB = require("./config/connection");
connectDB();

const router = require("./route/api");
const { validateSignup, validateLogin } = require("./validations/valUser");

require("./config/passport");

// middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize()); // for passport
app.use(passport.session());

app.use((err, req, res, next) => {
  // for server error
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.use("/api", router); // for routing

// two routes for authentication purpose
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: true }),
  (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/`); // Redirect to your frontend app
  }
);

app.post(
  "/signup",
  validateSignup,
  passport.authenticate("local-signup"),
  (req, res) => {
    if (req.user) {
      res.status(201).json({ message: "User created successfully!" });
    } else {
      res.status(400).json({ message: "Signup failed." });
    }
  }
);

app.post(
  "/login",
  validateLogin,
  passport.authenticate("local-login"),
  (req, res) => {
    if (req.user) {
      res.status(200).json({ message: "Login successful!" });
    } else {
      res.status(401).json({ message: "Login failed." });
    }
  }
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
