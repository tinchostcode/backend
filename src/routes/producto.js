const express=require('express');
const router=express.Router();

const productoController = require('../controllers/producto');


//api/prodcutos
router.post('/',productoController.crearProducto);

module.exports=router;