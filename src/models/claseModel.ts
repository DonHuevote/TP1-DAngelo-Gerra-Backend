// /models/claseModel.ts
import mongoose from 'mongoose';

const claseSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  duracion: Number,
  esOnline: Boolean
});

const Clase = mongoose.model('Clase', claseSchema);

export default Clase;
