const express = require('express');
const { status } = require('express/lib/response');
const app = express();

app.get('/' , (req, res)=>{
    res.status(200).send({message: 'olá mundo esse é meu novo repositorio clonado.'})      
})
app.listen(4001, ()=>{
    console.log('Api iniciada na porta 4001');   
})