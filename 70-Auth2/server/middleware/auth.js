import jwt from 'jsonwebtoken';

const secret = 'your_jwt_secret';

export const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};