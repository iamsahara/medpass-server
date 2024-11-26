import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import knex from "../db/knex.js";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await knex("users").where({ email }).first();
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

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
