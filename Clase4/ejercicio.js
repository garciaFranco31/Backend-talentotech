
    class Car {
        constructor(marca, modelo, anio, color) {
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
            this.color = color;
        }

        getAnio() {
            return this.anio;
        }

        carInformation() {
            console.log(this.marca, this.modelo, this.anio, this.color);
        }
    }

    const autos = [];
    let count = 0;

    // 1. Creamos y guardamos los autos (años 2010 a 2019)
    while (count < 10) {
        let marca = `marca${count}`;
        let modelo = `modelo${count}`;
        let anio = `201${count}`; // 2010, 2011, ..., 2018, 2019
        let color = `color${count}`;

        let auto = new Car(marca, modelo, anio, color);
        autos.push(auto);

        count += 1;
    }

    // 2. Filtramos fuera del ciclo para obtener solo los de 2018
    const autos2018 = autos.filter((car) => car.getAnio() == 2018);

    console.log("Autos del 2018 encontrados:", autos2018);

    // Si quieres imprimir la información detallada de cada auto encontrado:
    autos2018.forEach((car) => car.carInformation());