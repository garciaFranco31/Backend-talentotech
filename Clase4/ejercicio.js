class Car{
    constructor(marca, modelo, anio, color){
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
        this.color = color
    }

    getAnio(){
        return this.anio
    }

    carInformation(){
        return console.log(this.marca, this.modelo, this.anio, this.color)
    }
}

const auto1 = new Car("bmw", "gt", "2020", "negro")

auto1.carInformation()

const autos = []
let count = 0

while (count < 10){
    let marca = `marca${count}`
    let modelo = `modelo${count}`
    let anio = `202${count}`
    let color = `color${count}`

    let auto = new Car(marca, modelo, anio, color)

    autos.push(auto)

    count +=1
    console.log(auto.getAnio())
    //console.log(autos.filter((car) => car.getAnio() = 2018))
}

