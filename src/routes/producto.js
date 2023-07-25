const express=require('express');
const router=express.Router();

const productoController = require('../controllers/productoController');


//api/prodcutos
router.post('/',productoController.crearProducto); //creamos producto
router.get('/',productoController.obtenerProducto) //buscar productos
router.put('/:id',productoController.actualizarProducto); //update producto
router.get('/:id',productoController.obtenerProducto); //buscar un  producto
router.delete('/:id',productoController.eliminarProducto); //eliminar un  producto


module.exports=router;