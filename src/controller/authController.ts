import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel';
import { generateToken } from '../utils/jwtUtils';

// Register a new user
export const register = async (req: Request, res: Response) => {
  console.log('Datos recibidos:', req.body); // Verifica los datos recibidos
  
  const { userName, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ userName });

    if (existingUser) {
      res.status(400).json({ error: 'El nombre de usuario ya está en uso' });
      return;
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ userName, password: hashedPassword, email, esAdmin: false });
    console.log('Usuario a guardar:', newUser); // Verifica el usuario antes de guardarlo
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

// Login a user
export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });

    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    // Verificar la contraseña
    const isPasswordValid = user.password ? await bcrypt.compare(password, user.password) : false;
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Contraseña incorrecta' });
      return;
    }

    // Generar un token JWT
    const token = generateToken(user._id.toString());
    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};