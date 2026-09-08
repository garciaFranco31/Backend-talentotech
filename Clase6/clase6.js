function taskAsync(callback){
    setTimeout(function(){
        console.log("tarea asincronica completada.")
        callback()
    }, 3000)
}

console.log("inicio de la tarea")

taskAsync(function(){
    console.log("fin dee la tarea")
})