import jwt from 'jsonwebtoken';

const SECRET_KEY = 'cr'; // Replace with a secure key

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};