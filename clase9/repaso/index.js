const http = require('http')



const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("hola mundo!")
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})