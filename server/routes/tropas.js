import { Router } from 'express';
import Tropa from '../models/tropa.js';

let router = Router();

// Listado general de tropas
router.get('/', (req, res) => {
  Tropa.find().then(resultado => {
    res.render('tropas_listado', { tropas: resultado });
  }).catch(error => {
    res.render('error', { error: 'Error obteniendo tropas' });
  });
});

// Ficha de tropa
router.get('/:id', (req, res) => {
  Tropa.findById(req.params.id).then(resultado => {
    if (resultado) {
      res.render('tropas_ficha', { tropa: resultado });
    } else {
      res.render('error', { error: 'Tropa no encontrada' });
    }
  }).catch(error => {
    res.render('error', { error: 'Tropa no encontrada' });
  });
});

export default router;