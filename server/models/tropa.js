import mongoose from 'mongoose';

const tropaSchema = new mongoose.Schema({
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
  vida: 
  {
    type: Number,
    required: true,
    min: 0
  },
  dano: 
  {
    type: Number,
    required: true,
    min: 0
  },
  objetivo: 
  {
    type: String,
    required: true,
    trim: true
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

const Tropa = mongoose.model('tropa', tropaSchema);

export default Tropa;