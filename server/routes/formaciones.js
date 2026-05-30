import { Router } from 'express';
import Formacion from '../models/formacion.js';
import Tropa from '../models/tropa.js';
import Hechizo from '../models/hechizo.js';

let router = Router();

// Listado general de formaciones
router.get('/', (req, res) => {
  Formacion.find()
    .populate('tropas.tropa')
    .populate('hechizos.hechizo')
    .then(resultado => {
      res.render('formaciones_listado', {
        formaciones: resultado,
        mensaje: req.query.mensaje || null
      });
    })
    .catch(error => {
      res.render('error', { error: 'Error obteniendo formaciones' });
    });
});

// Formulario para crear formación
router.get('/nuevo', async (req, res) => {
  try {
    const tropas = await Tropa.find();
    const hechizos = await Hechizo.find();

    res.render('formaciones_nuevo', {
      tropas: tropas,
      hechizos: hechizos
    });
  } catch (error) {
    res.render('error', { error: 'Error cargando el formulario' });
  }
});

// Insertar formación
router.post('/insertar', (req, res) => {
  let nuevaFormacion = new Formacion({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    tropas: req.body.tropas || [],
    hechizos: req.body.hechizos || []
  });

  nuevaFormacion.save().then(resultado => {
    res.redirect(req.baseUrl + '?mensaje=Formación creada correctamente');
  }).catch(error => {
    res.render('error', {
      error: error.message || 'Error creando la formación'
    });
  });
});

// Formulario de edición
router.get('/editar/:id', async (req, res) => {
  try {
    const formacion = await Formacion.findById(req.params.id);
    const tropas = await Tropa.find();
    const hechizos = await Hechizo.find();

    if (formacion) {
      res.render('formaciones_editar', {
        formacion: formacion,
        tropas: tropas,
        hechizos: hechizos
      });
    } else {
      res.render('error', { error: 'Formación no encontrada' });
    }
  } catch (error) {
    res.render('error', { error: 'Error cargando la formación' });
  }
});

// Editar formación
router.put('/:id', async (req, res) => {
  try {
    const formacion = await Formacion.findById(req.params.id);

    if (!formacion) {
      return res.render('error', {
        error: 'Formación no encontrada'
      });
    }

    formacion.nombre = req.body.nombre;
    formacion.descripcion = req.body.descripcion;
    formacion.tropas = req.body.tropas || [];
    formacion.hechizos = req.body.hechizos || [];

    await formacion.save();

    res.redirect(req.baseUrl + '?mensaje=Formación modificada correctamente');
  } catch (error) {
    res.render('error', {
      error: error.message || 'Error modificando la formación'
    });
  }
});

// Borrar formación
router.delete('/:id', (req, res) => {
  Formacion.findByIdAndDelete(req.params.id)
    .then(resultado => {
      res.redirect(req.baseUrl + '?mensaje=Formación eliminada correctamente');
    })
    .catch(error => {
      res.render('error', {
        error: 'Error borrando la formación'
      });
    });
});

// Ficha de formación
router.get('/:id', (req, res) => {
  Formacion.findById(req.params.id)
    .populate('tropas.tropa')
    .populate('hechizos.hechizo')
    .then(resultado => {
      if (resultado) {
        res.render('formaciones_ficha', {
          formacion: resultado
        });
      } else {
        res.render('error', {
          error: 'Formación no encontrada'
        });
      }
    })
    .catch(error => {
      res.render('error', {
        error: 'Formación no encontrada'
      });
    });
});

export default router;