import dotenv from 'dotenv';
import mongoose from 'mongoose';

import Tropa from '../server/models/tropa.js';
import Hechizo from '../server/models/hechizo.js';

dotenv.config();

const tropas = [
  {
    nombre: 'Bárbaro',
    espacio: 1,
    vida: 120,
    dano: 30,
    objetivo: 'Cualquiera',
    imagenIcono: '/img/tropas/barbaro-icono.png',
    imagenGrande: '/img/tropas/barbaro.png'
  },
  {
    nombre: 'Arquera',
    espacio: 1,
    vida: 48,
    dano: 34,
    objetivo: 'Cualquiera',
    imagenIcono: '/img/tropas/arquera-icono.png',
    imagenGrande: '/img/tropas/arquera.png'
  },
  {
    nombre: 'Gigante',
    espacio: 5,
    vida: 3000,
    dano: 80,
    objetivo: 'Defensas',
    imagenIcono: '/img/tropas/gigante-icono.png',
    imagenGrande: '/img/tropas/gigante.png'
  },
  {
    nombre: 'Duende',
    espacio: 1,
    vida: 100,
    dano: 40,
    objetivo: 'Recursos',
    imagenIcono: '/img/tropas/duende-icono.png',
    imagenGrande: '/img/tropas/duende.png'
  },
  {
    nombre: 'Rompemuros',
    espacio: 2,
    vida: 72,
    dano: 100,
    objetivo: 'Muros',
    imagenIcono: '/img/tropas/rompemuros-icono.png',
    imagenGrande: '/img/tropas/rompemuros.png'
  },
  {
    nombre: 'Globo bombástico',
    espacio: 5,
    vida: 1200,
    dano: 300,
    objetivo: 'Defensas',
    imagenIcono: '/img/tropas/globo-icono.png',
    imagenGrande: '/img/tropas/globo.png'
  }
];

const hechizos = [
  {
    nombre: 'Hechizo de rayo',
    espacio: 1,
    dano: 400,
    duracion: 0,
    imagenIcono: '/img/hechizos/rayo-icono.png',
    imagenGrande: '/img/hechizos/rayo.png'
  },
  {
    nombre: 'Hechizo de curación',
    espacio: 2,
    dano: 0,
    duracion: 12,
    imagenIcono: '/img/hechizos/curacion-icono.png',
    imagenGrande: '/img/hechizos/curacion.png'
  },
  {
    nombre: 'Hechizo de furia',
    espacio: 2,
    dano: 0,
    duracion: 18,
    imagenIcono: '/img/hechizos/furia-icono.png',
    imagenGrande: '/img/hechizos/furia.png'
  },
  {
    nombre: 'Hechizo de salto',
    espacio: 2,
    dano: 0,
    duracion: 20,
    imagenIcono: '/img/hechizos/salto-icono.png',
    imagenGrande: '/img/hechizos/salto.png'
  },
  {
    nombre: 'Hechizo de hielo',
    espacio: 1,
    dano: 0,
    duracion: 5,
    imagenIcono: '/img/hechizos/hielo-icono.png',
    imagenGrande: '/img/hechizos/hielo.png'
  },
  {
    nombre: 'Hechizo clonador',
    espacio: 3,
    dano: 0,
    duracion: 30,
    imagenIcono: '/img/hechizos/clonador-icono.png',
    imagenGrande: '/img/hechizos/clonador.png'
  }
];

try {

  await mongoose.connect(process.env.MONGODB_URI);

  await Tropa.deleteMany();
  await Hechizo.deleteMany();

  await Tropa.insertMany(tropas);
  await Hechizo.insertMany(hechizos);

  console.log('Seed ejecutada correctamente');

  process.exit();

} catch (error) {

  console.log('Error ejecutando la seed');
  console.log(error);

  process.exit(1);
}