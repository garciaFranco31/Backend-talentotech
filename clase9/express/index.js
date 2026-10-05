const PORT = 3000

app.get("/", (res, req) => {
    
})

app.use((req, res, next) = > {
    res.status(404).json({
        error : "ruta no encontrada",
        mensaje : "el recurso ${req.url} no existe"
    })
})