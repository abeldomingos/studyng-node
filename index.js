const express = require("express");
const app = express();


//Criar a nossa 1º Rota
app.get("/", function(req, res) {
    res.send("Seja Bem Vindo ao nosso app");
    
})

//Outras Rota em Sobre
app.get("/sobre", function(req, res) {
    res.send("Sobre a empresa")
    
})

// Outra Rota de Service
app.get("/service", function(req, res){
    res.send("Nossos services estão abertos")
})




app.listen(8081, function() {
    console.log("O Servidor esta rodando na url http://localhosty:8081");
    
})