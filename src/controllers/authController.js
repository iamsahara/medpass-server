import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import knex from "../db/knex.js"; // Make sure this points to your Knex configuration

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Store securely in environment variables

// Login user and issue JWT
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await knex("users").where({ email }).first();
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, message: `Welcome back, ${user.name}!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
  
};
export const getProtectedResource = (req, res) => {
    res.json({ message: "Welcome to the protected route!", user: req.user });
  };