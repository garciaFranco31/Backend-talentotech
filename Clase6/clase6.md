callback: funcion que se pasa como parametro a otra funcion
objeto promise: objeto que representa el resultado eventual de una tarea asincrónica.

si una promesa se resulve bien, va por el lado del then, en caso de que se resuelva mal, va por el lado del catch. Finally no es necesario, se ejecuta siempre (no importa si la promesa falla o no)
