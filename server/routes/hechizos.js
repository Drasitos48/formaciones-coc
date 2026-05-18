import { Router } from 'express';
import Hechizo from '../models/hechizo.js';

let router = Router();

// Listado general de hechizos
router.get('/', (req, res) => {
  Hechizo.find().then(resultado => {
    res.render('hechizos_listado', { hechizos: resultado });
  }).catch(error => {
    res.render('error', { error: 'Error obteniendo hechizos' });
  });
});

// Ficha de hechizo
router.get('/:id', (req, res) => {
  Hechizo.findById(req.params.id).then(resultado => {
    if (resultado) {
      res.render('hechizos_ficha', { hechizo: resultado });
    } else {
      res.render('error', { error: 'Hechizo no encontrado' });
    }
  }).catch(error => {
    res.render('error', { error: 'Hechizo no encontrado' });
  });
});

export default router;