//rutas para empleados
const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController')

//api productos
router.post('/', empleadoController.registrarEmpleado);
router.get('/', empleadoController.obtenerEmpleados);
router.put('/:id', empleadoController.actualizarEmpleado);
router.get('/:id', empleadoController.obtenerEmpleado);
router.delete('/:id', empleadoController.eliminarEmpleado);




module.exports = router;