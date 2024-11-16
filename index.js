const express = require("express");
const app = express();



app.get("/home", function(req, res) {
    res.sendFile(__dirname + "/html/index.html")
    
})

//Criar a nossa 1º Rota
app.get("/", function(req, res) {
    res.send("Hello Abel Kamulingui");
    
})

//Outras Rota em Sobre
app.get("/sobre", function(req, res) {
    res.send("Sobre a empresa")
    
})

// Outra Rota de Service
app.get("/service", function(req, res){
    res.send("Nossos services estão abertos")
})

app.get("/escola/:cargo/:professor", function(req, res) {
    res.send(req.params)
    
})




app.listen(8081, function() {
    console.log("O Servidor esta rodando na url http://localhosty:8081");
    
})