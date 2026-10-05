# MODELANDO API REST

### API - aplication programming interface
arquitectura que propone la comunicación utilizando HTTP y JSON.
![alt text](image.png)

permite el acceso a información mediante urls únicas.
utiliza métodos GET, POST, PUT, DELETE para interactuar con los recursos.

Caracterísitcas
* sin estado: cada interaccion es independiente, facilita el manejo de múltiples solicitudes.
* formato JSON
* interoperabilidad: permite comunicacion entre sistemas con diferentes tecnologías

REST - Representational estate transfer

### ESTRUCTURA DE ARCHIVOS

![estructura de una api rest](image-1.png)

Ventajas de la buena organización de archivos:
* organización
* escalablidad
* colaboración

- src
    - routes: las rutas de la api
    - controllers: manejo de solicitudes
    - services: logica de la ruta (acciones q se deben ahcer para responder una solicitud)
    - models: es donde se modelan los datos y donde se interactua con la BBDD


