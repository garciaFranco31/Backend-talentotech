const args = process.argv.slice(2);

switch (args[0]){
    case "GET":
        console.log("Toma un dato")
        break
    case "POST":
        if (args[1]){
            console.log(`Se recibio ${args[1]}`)
        }
        break
    case "PUT":
        if (args[1]){
            console.log(`Se actualizo el item con id ${args[1]} satisfactoriamente`)
        }
        break
    case "DELETE":
        if (args[1]){
            console.log(`Se elimino el item con id ${args[1]} satisfactoriamente`)
        }
        break
}


//npm run start parametro (get, post, put, delete)