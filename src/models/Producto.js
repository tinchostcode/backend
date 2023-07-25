// los models la primera letra con Mayuscula . Producto.js
const mongoose=require('mongoose');
 
const ProductoSchema= mongoose.Schema({

    nombre:{type:String, required:true},
    categoria:{type:String, required:true},
    ubicacion:{type:String, required:true},
    precio:{type:Number, required:true}   
},  {timestamps:true, versionKey:false});

module.exports=mongoose.model('Producto',ProductoSchema);