function taskAsync(){

    return new Promise(function  (resolve, reject) {
        setTimeout(function(){
            if (Math.random() < 0.5){
                resolve("tarea asincronica completada")
            }else{
                reject(new Error("tarea asincronica fallida"))
            }
        }, 3000)
    })
}


async function Asynctask(){
    console.log("inicio de la tarea")
    try{
        const result = await taskAsync()
        console.log(result)
    }
    catch (error){
        console.log(error)
    }
    finally{
        console.log("tarea finalizada")
    }
}

Asynctask()