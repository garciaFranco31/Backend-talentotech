//crea un array de 10 numeros que representen el precio de productos
//utilizar un metodo de array para calcular el 21% de cada valor
//imprimir los IVAs calculados de la forma "el precio es: ${valor} - IVA incluido"

const prices = [12.4, 90.3, 76, 1020.3, 34]

const pricesIVA = prices.map( (price) => price *= 1.21)

pricesIVA.forEach((price) => console.log(`El precio es: ${price} - IVA incluido`))

