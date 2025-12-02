import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.json({"message" : "Bienvenue sur mon API!"})
})

app.listen(3000,() => {
    console.log("L'API tourne sur http://127.0.0.1:3000");
    
})