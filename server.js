//importação via commonjs:
//var express = require("express");

import express from "express";

const app = express();
const porta = 8000;

//Rotas
app.get("/", (request, response) => {
    response.send("API funcionando!");
});

app.get("/infonet3", (request, response) => {
    const alunos = [
        {
            nome:"Maria Eduarda"
        },
        {
            nome:"Isaac"
        },
        {
            nome:"Luka"
        },
        {
            nome:"Lorena"
        },
        {
            nome:"Emanuelle"
        },
        {
            nome:"Eduardo"
        }
        
    ];

    response.json(alunos);

});

//Listener

app.listen(porta, (request, response) => {
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`);
});