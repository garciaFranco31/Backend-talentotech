const autos = [
    {"marca": "Toyota", "modelo": "Corolla", "anio": 2020, "color": "Blanco"},
    {"marca": "Honda", "modelo": "Civic", "anio": 2021, "color": "Negro"},
    {"marca": "Ford", "modelo": "Mustang", "anio": 2019, "color": "Rojo"},
    {"marca": "Chevrolet", "modelo": "Spark", "anio": 2022, "color": "Azul"},
    {"marca": "Nissan", "modelo": "Sentra", "anio": 2018, "color": "Gris"},
    {"marca": "BMW", "modelo": "Serie 3", "anio": 2023, "color": "Blanco"},
    {"marca": "Mazda", "modelo": "CX-5", "anio": 2018, "color": "Rojo"},
    {"marca": "Hyundai", "modelo": "Tucson", "anio": 2022, "color": "Plata"},
    {"marca": "Volkswagen", "modelo": "Golf", "anio": 2018, "color": "Negro"},
    {"marca": "Mercedes-Benz", "modelo": "Clase C", "anio": 2023, "color": "Azul"},
]

console.log(autos.filter((auto) => auto.anio == 2018))

function destructuring(autos = [], color_count = false){
    if (color_count){
        let cantidad = 0
        autos.forEach((auto) => {
            let {color} = auto
            if (color_count.toLowerCase() == color.toLowerCase())
                cantidad++
        })
        console.log(`La cantidad de autos de color ${color_count} es ${cantidad}`)
    }
    else{
        console.log(`No hay color para contar`)
    }
}

destructuring(autos, "blanco")


