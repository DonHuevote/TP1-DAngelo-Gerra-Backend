import express from 'express';
import mongoose from 'mongoose';
import { corsOptions } from './src/middlewear/corsOptions';
import cors from 'cors';
import claseRoutes from './src/routes/claseRoutes';
import authRoutes from './src/routes/authRoutes';

const app = express();

// Middleware para parsear el cuerpo de las solicitudes en JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors(corsOptions));

// Usar las rutas de autenticación

//Usar las rutas de autenticación
app.use(authRoutes)

// Usar las rutas de clases
app.use(claseRoutes);

// Conexión a MongoDB
mongoose.connect("mongodb://mongo:27017/ClaseDB")
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
