// /controllers/claseController.ts
import { Request, Response } from 'express';
import Clase from '../models/claseModel';

// Select all clases
export const getClases = async (req: Request, res: Response) => {
  try {
    const clases = await Clase.find();
    res.json(clases);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las clases' });
  }
};

// Select clase by id
export const getClaseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const clase = await Clase.findById(id);
    res.json(clase);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la clase' });
  }
};

// Create new clase
export const createClase = async (req: Request, res: Response) => {
  const { nombre, duracion, esOnline } = req.body;

  try {
    const nuevaClase = new Clase({
      nombre,
      duracion,
      esOnline
    });

    const claseGuardada = await nuevaClase.save();
    res.status(201).json(claseGuardada);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar la clase' });
  }
};

// Update clase
export const updateClase = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, duracion, esOnline } = req.body;

  try {
    const claseActualizada = await Clase.findByIdAndUpdate(id, { nombre, duracion, esOnline }, { new: true });
    res.json(claseActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la clase' });
  }
};

// Delete clase
export const deleteClase = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const claseEliminada = await Clase.findByIdAndDelete(id);
    res.json({ message: 'Clase eliminada correctamente', clase: claseEliminada });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la clase' });
  }
};
    