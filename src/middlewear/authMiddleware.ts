import { Request, Response, NextFunction } from 'express'; 
import { verifyToken } from '../utils/jwtUtils';
import 'express'; // Import the extended Request type

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
    return
    }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

declare module 'express-serve-static-core' {
  interface Request {
    user?: any; // You can replace 'any' with a specific type for the user object
  }
}