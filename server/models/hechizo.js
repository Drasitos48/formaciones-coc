import mongoose from 'mongoose';

const hechizoSchema = new mongoose.Schema({
  nombre: 
  {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  espacio: 
  {
    type: Number,
    required: true,
    min: 1
  },
  dano: 
  {
    type: Number,
    required: true,
    min: 0
  },
  duracion: 
  {
    type: Number,
    required: true,
    min: 0
  },
  imagenIcono: 
  {
    type: String,
    required: true,
    trim: true
  },
  imagenGrande: 
  {
    type: String,
    required: true,
    trim: true
  },
  nivelMaximo:
  {
  type: Number,
  required: true,
  min: 1
  },
});

const Hechizo = mongoose.model('hechizo', hechizoSchema);

export default Hechizo;