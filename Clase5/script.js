console.log(process.argv)
const args = process.argv.slice(2)

switch(args[0]){
    case "GET":
        console.log("GET")
    case "POST":
        if (args[1]){
            console.log(`recibimos ${args}`)
        }
    case "PUT":
        break
    case "DELETE":
        if (args[1]){
            console.log(`Eliminamos ${args[1]}`)
        }
}