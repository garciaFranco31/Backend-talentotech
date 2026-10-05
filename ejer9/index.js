import express from "express"

const app = express()

app.use((req,res, next) =>{
    console.log(`Datos recibidos ${req.method} ${req.url}`)
    next()
})

app.get('/', (req, res) => {
    res.send("Hola desde express con middlewares!")
})

app.get('/ping', (req, res, next) => {
    res.status(200).send("pong")
})

app.use((req, res, next) => {
    res.status(404).json({
        error: "404 ruta no encontrada",
        mensaje: `el recurso ${req.url} no encontrado`
    })
})