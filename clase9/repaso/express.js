// import express from "express"
// import {join, dirname} from 'path'
// import {fileURLToPath} from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// const app = express()

// app.use(express.static(join(__dirname, 'public')))

// const PORT = 3000

// app.listen(PORT, (req, res) => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`)
// })

import express from 'express'
const app = express()

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`)
    next()
})

app.get('/', (req, res) => {
    res.send("Hola desde express con middlewares!")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})

