import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();
const users = [
  { email: "admin@example.com", password: "password" }, { email:"sahar.abd@gmail.com" , password:"password"}
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { email: user.email }, 
    process.env.JWT_SECRET || "your_jwt_secret", 
    { expiresIn: "100hr" } 
  );

  res.json({ token }); 
});

export default router;
