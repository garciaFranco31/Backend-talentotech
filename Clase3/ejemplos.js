//declaracion de funciones
function sum(n1, n2){
    return n1 + n2
}

// let res = sum(12,23)
// console.log(res)

//funcion exppresada 
const search = sum(10,12)

console.log(search)

//arrow function
const substract = () => {} //el return está implicito, no es necesario


//callback: funcion que se pasa como parametro de otra funcion
function add(a,b){
    return a + b
}

function calculator(a,b,action){
    return action(a,b)
}

calculator(10,20,add)


const array = ["hola","quiero","coger"]
console.log(array.length)

array.push("gato") //agrega un elemento al final del array
array.unshift("jejox") //agrega un elemento al inicio del array

console.log(array)


array.pop() //saca el elemento que esta al final del array
array.shift() //saca el elemento que esta al principio del array

console.log(array.join('-'))

array.forEach( (word) => console.log(word))


const nums = [1,2,3,4]
console.log(nums.filter( (number) => number>=2 )) //imprime solamente los numeros que cumplen la condicion

console.log(nums.map((number) => number *= 1.21)) //devuelve un array con el 21% agregado a cada numero del array original

console.log(nums.reduce( (total, num) => total + num, 0)) //toma el valor 0 como valor inicial y se encarga de sumar todos los elementos del array

const fruits = ["mandarina", "naranja", "banana", "sandia"]
for (let fruit of fruits){
    console.log(fruit)
}

const menssage = `hola uwu
que onda
que es de tu vida je`

console.log(menssage)

console.log(`la suma total es ${1 + 2}`)