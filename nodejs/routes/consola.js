const express = require('express');
const router = express.Router();
const diabetesController= require('../controllers/consola')

//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas
//Servicio para mostrar el formulario
router.get('/altaDiabetes',diabetesController.getAltaDiabetes);
//Servicio para procesar los datos del formulario
router.post('/altaDiabetes',diabetesController.postAltaDiabetes);
//Servicio para consultar todos los datos
router.get('/consultaAllDiabetes',diabetesController.getAllDiabetes);
//Servicio para consultar un dato
router.get('/consultaDiabetes',diabetesController.getConsultaDiabetes);
//Servicio para eliminar un registro por id
router.post('/deleteDiabetes', diabetesController.postDeleteDiabetes);
//Servicio para actualizar las consola
router.post('/updateDiabetes',diabetesController.postUpdateDiabetes);

module.exports = router