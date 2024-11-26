import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Store securely in env variables
const users = []; // Mock database, replace with a real database integration

// Register a new user
export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user in mock database
  users.push({ email, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully!" });
};

// Login user and issue JWT
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Compare the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate JWT
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
};

// Middleware to verify JWT
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user info to request object
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

// Example protected resource
export const getProtectedResource = (req, res) => {
  res.json({ message: "Welcome to the protected route!", user: req.user });
};
