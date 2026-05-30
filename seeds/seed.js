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
    nivelMaximo: 12,
    imagenIcono: '/img/tropas/barbaro-icono.png',
    imagenGrande: '/img/tropas/barbaro.png'
  },
  {
    nombre: 'Arquera',
    espacio: 1,
    vida: 60,
    dano: 34,
    objetivo: 'Cualquiera',
    nivelMaximo: 12,
    imagenIcono: '/img/tropas/arquera-icono.png',
    imagenGrande: '/img/tropas/arquera.png'
  },
  {
    nombre: 'Gigante',
    espacio: 5,
    vida: 3000,
    dano: 80,
    objetivo: 'Defensas',
    nivelMaximo: 12,
    imagenIcono: '/img/tropas/gigante-icono.png',
    imagenGrande: '/img/tropas/gigante.png'
  },
  {
    nombre: 'Duende',
    espacio: 1,
    vida: 100,
    dano: 40,
    objetivo: 'Recursos',
    nivelMaximo: 9,
    imagenIcono: '/img/tropas/duende-icono.png',
    imagenGrande: '/img/tropas/duende.png'
  },
  {
    nombre: 'Rompemuros',
    espacio: 2,
    vida: 100,
    dano: 120,
    objetivo: 'Muros',
    nivelMaximo: 12,
    imagenIcono: '/img/tropas/rompemuros-icono.png',
    imagenGrande: '/img/tropas/rompemuros.png'
  },
  {
    nombre: 'Globo bombástico',
    espacio: 5,
    vida: 1200,
    dano: 300,
    objetivo: 'Defensas',
    nivelMaximo: 11,
    imagenIcono: '/img/tropas/globo-icono.png',
    imagenGrande: '/img/tropas/globo.png'
  },
  {
    nombre: 'Mago',
    espacio: 4,
    vida: 250,
    dano: 245,
    objetivo: 'Cualquiera',
    nivelMaximo: 12,
    imagenIcono: '/img/tropas/mago-icono.png',
    imagenGrande: '/img/tropas/mago.png'
  },
  {
    nombre: 'Sanadora',
    espacio: 14,
    vida: 1800,
    dano: 0,
    objetivo: 'Curación',
    nivelMaximo: 9,
    imagenIcono: '/img/tropas/sanadora-icono.png',
    imagenGrande: '/img/tropas/sanadora.png'
  },
  {
    nombre: 'Dragón',
    espacio: 20,
    vida: 4500,
    dano: 370,
    objetivo: 'Cualquiera',
    nivelMaximo: 12,
    imagenIcono: '/img/tropas/dragon-icono.png',
    imagenGrande: '/img/tropas/dragon.png'
  },
  {
    nombre: 'P.E.K.K.A',
    espacio: 25,
    vida: 7200,
    dano: 820,
    objetivo: 'Cualquiera',
    nivelMaximo: 11,
    imagenIcono: '/img/tropas/pekka-icono.png',
    imagenGrande: '/img/tropas/pekka.png'
  },
  {
    nombre: 'Bebé dragón',
    espacio: 10,
    vida: 2100,
    dano: 150,
    objetivo: 'Cualquiera',
    nivelMaximo: 11,
    imagenIcono: '/img/tropas/bebe-dragon-icono.png',
    imagenGrande: '/img/tropas/bebe-dragon.png'
  },
  {
    nombre: 'Minero',
    espacio: 6,
    vida: 1400,
    dano: 200,
    objetivo: 'Cualquiera',
    nivelMaximo: 11,
    imagenIcono: '/img/tropas/minero-icono.png',
    imagenGrande: '/img/tropas/minero.png'
  },
  {
    nombre: 'Dragón eléctrico',
    espacio: 30,
    vida: 5500,
    dano: 400,
    objetivo: 'Cualquiera',
    nivelMaximo: 8,
    imagenIcono: '/img/tropas/dragon-electrico-icono.png',
    imagenGrande: '/img/tropas/dragon-electrico.png'
  },
  {
    nombre: 'Yeti',
    espacio: 18,
    vida: 3900,
    dano: 290,
    objetivo: 'Cualquiera',
    nivelMaximo: 6,
    imagenIcono: '/img/tropas/yeti-icono.png',
    imagenGrande: '/img/tropas/yeti.png'
  },
  {
    nombre: 'Montadragones',
    espacio: 25,
    vida: 5000,
    dano: 340,
    objetivo: 'Defensas',
    nivelMaximo: 5,
    imagenIcono: '/img/tropas/montadragones-icono.png',
    imagenGrande: '/img/tropas/montadragones.png'
  },
  {
    nombre: 'Titán eléctrico',
    espacio: 32,
    vida: 8400,
    dano: 300,
    objetivo: 'Cualquiera',
    nivelMaximo: 4,
    imagenIcono: '/img/tropas/titan-electrico-icono.png',
    imagenGrande: '/img/tropas/titan-electrico.png'
  },
  {
    nombre: 'Montaraíces',
    espacio: 20,
    vida: 7200,
    dano: 250,
    objetivo: 'Defensas',
    nivelMaximo: 3,
    imagenIcono: '/img/tropas/montaraices-icono.png',
    imagenGrande: '/img/tropas/montaraices.png'
  },
  {
    nombre: 'Lanzador',
    espacio: 16,
    vida: 1800,
    dano: 180,
    objetivo: 'Cualquiera',
    nivelMaximo: 3,
    imagenIcono: '/img/tropas/lanzador-icono.png',
    imagenGrande: '/img/tropas/lanzador.png'
  },
  {
    nombre: 'Gólem meteórico',
    espacio: 30,
    vida: 6500,
    dano: 220,
    objetivo: 'Defensas',
    nivelMaximo: 3,
    imagenIcono: '/img/tropas/golem-meteorico-icono.png',
    imagenGrande: '/img/tropas/golem-meteorico.png'
  }
];

const hechizos = [
  {
    nombre: 'Hechizo de rayo',
    espacio: 1,
    dano: 400,
    duracion: 0,
    nivelMaximo: 12,
    imagenIcono: '/img/hechizos/rayo-icono.png',
    imagenGrande: '/img/hechizos/rayo.png'
  },
  {
    nombre: 'Hechizo de curación',
    espacio: 2,
    dano: 0,
    duracion: 12,
    nivelMaximo: 11,
    imagenIcono: '/img/hechizos/curacion-icono.png',
    imagenGrande: '/img/hechizos/curacion.png'
  },
  {
    nombre: 'Hechizo de furia',
    espacio: 2,
    dano: 0,
    duracion: 18,
    nivelMaximo: 7,
    imagenIcono: '/img/hechizos/furia-icono.png',
    imagenGrande: '/img/hechizos/furia.png'
  },
  {
    nombre: 'Hechizo de salto',
    espacio: 2,
    dano: 0,
    duracion: 20,
    nivelMaximo: 5,
    imagenIcono: '/img/hechizos/salto-icono.png',
    imagenGrande: '/img/hechizos/salto.png'
  },
  {
    nombre: 'Hechizo de hielo',
    espacio: 1,
    dano: 0,
    duracion: 5,
    nivelMaximo: 7,
    imagenIcono: '/img/hechizos/hielo-icono.png',
    imagenGrande: '/img/hechizos/hielo.png'
  },
  {
    nombre: 'Hechizo clonador',
    espacio: 3,
    dano: 0,
    duracion: 30,
    nivelMaximo: 8,
    imagenIcono: '/img/hechizos/clonador-icono.png',
    imagenGrande: '/img/hechizos/clonador.png'
  },
  {
    nombre: 'Hechizo de invisibilidad',
    espacio: 1,
    dano: 0,
    duracion: 4,
    nivelMaximo: 5,
    imagenIcono: '/img/hechizos/invisibilidad-icono.png',
    imagenGrande: '/img/hechizos/invisibilidad.png'
  },
  {
    nombre: 'Hechizo de retirada',
    espacio: 2,
    dano: 0,
    duracion: 0,
    nivelMaximo: 5,
    imagenIcono: '/img/hechizos/retirada-icono.png',
    imagenGrande: '/img/hechizos/retirada.png'
  },
  {
    nombre: 'Hechizo de revivir',
    espacio: 2,
    dano: 0,
    duracion: 0,
    nivelMaximo: 5,
    imagenIcono: '/img/hechizos/revivir-icono.png',
    imagenGrande: '/img/hechizos/revivir.png'
  },
  {
    nombre: 'Hechizo de tótem',
    espacio: 2,
    dano: 0,
    duracion: 20,
    nivelMaximo: 4,
    imagenIcono: '/img/hechizos/totem-icono.png',
    imagenGrande: '/img/hechizos/totem.png'
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