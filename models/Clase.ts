import mongoose from 'mongoose';

const claseSchema = new mongoose.Schema({
    nombre: String,
    duracion: Number,
    esOnline: Boolean
});

const Clase = mongoose.model('Clase', claseSchema);

export default Clase;
