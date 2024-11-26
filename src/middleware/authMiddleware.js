import jwt from "jsonwebtoken";

// Secret for signing and verifying JWTs
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the Authorization header exists and has a Bearer token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user information from token payload to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Handle invalid or expired token
    res.status(403).json({ message: "Forbidden: Invalid or expired token" });
  }
};
