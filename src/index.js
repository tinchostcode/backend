const express= require('express');
const mongoose=require('mongoose');
require ('dotenv').config();

const app=express();

const port=process.env.PORT || 9000;



 mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log('Base Conectada...🚀🚀🚀'))
        .catch((error) =>console.error('ERROR AL CONECTAR 😪:',error)); 


//middlewares
app.use(express.json()); // habilitamos para recibir json en nuestra app 

app.use('/api/productos',require('./routes/producto'));

app.listen(port,()=> console.log('server conectado..😄. en el puerto:',port))