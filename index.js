import express from 'express'
import userRoutes from './routes/userRoutes.js'
const app = express();

app.get('/', (req, res) => {
    res.json({"message" : "Bienvenue sur mon API!"})
})
app.use('/', userRoutes)

app.listen(3000,() => {
    console.log("L'API tourne sur http://127.0.0.1:3000");
    
})