import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();
const users = [
  { email: "admin@example.com", password: "password" }, { email:"sahar.abd@gmail.com" , password:"password"}
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate a token
  const token = jwt.sign(
    { email: user.email }, // Payload
    process.env.JWT_SECRET || "your_jwt_secret", // Secret key
    { expiresIn: "100hr" } // Token expiration
  );

  res.json({ token }); // Send the token to the frontend
});

export default router;
