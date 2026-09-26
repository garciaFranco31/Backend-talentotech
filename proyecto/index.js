const args = process.argv.slice(2)

const id = args[1] || 1
const metodo = args[0]

console.log(args.length)

switch(metodo){
    case "GET":
        if (args.length == 1){
            fetch(`https://fakestoreapi.com/products/`, {method: "GET"})
                .then(response => response.json())
                .then(data => console.log(data));
        }else{
            fetch(`https://fakestoreapi.com/products/${id}`, {method: "GET"})
                .then(response => response.json())
                .then(data => console.log(data));
        }
        break
    case "POST":
        if (args.length == 4){
            const product = { title: `${args[1]}` , price: `${args[2]}`, category: `${args[3]}`};
            fetch('https://fakestoreapi.com/products', {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(product)
            })
            .then(response => response.json())
            .then(data => console.log(data));
        }
        else{
            console.log("Para cargar un nuevo producto es necesario ingresar: titulo, precio y categoria")
        }
        break 
    case "DELETE":
        if(args.length == 2){
            fetch(`https://fakestoreapi.com/products/${id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(data => console.log(data));
        }
        else{
            console.log("Para eliminar un producto, debe indicar el id")
        }
}


