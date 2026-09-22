const URL = "https://rickandmortyapi.com/api/character"

async function personajes(){
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character", {method: "GET"})
        if (!response.ok){
            throw new Error("Error")
        }
        const data = await response.json()
        const primeros_pjs = data.results.slice(0,5)
        return primeros_pjs
    }
    catch (error){
        console.log(error)
    }
}

const pjs =  await personajes()
console.log(pjs)