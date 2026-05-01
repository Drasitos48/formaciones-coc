import mongoose from 'mongoose';

const formacionSchema = new mongoose.Schema({
  nombre: 
  {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },

  descripcion: 
  {
    type: String,
    required: true,
    trim: true
  },

  tropas: 
  [
    {
      tropa: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tropa',
        required: true
      },
      cantidad: 
      {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],

  hechizos: 
  [
    {
      hechizo: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hechizo',
        required: true
      },
      cantidad: 
      {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],

  fechaCreacion: 
  {
    type: Date,
    default: Date.now
  }
});

const Formacion = mongoose.model('formacion', formacionSchema);

export default Formacion;