/*const saludar = (saludo: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(saludo)
            return resolve(saludo)
        }, 5000)
    })
}*/
let waitToEnd = false

function saludar(texto: string){
    const ms = 500

    if (!waitToEnd){
        fn(ms, texto)
    } else {
        console.log("Wait man!")
    }
}

const fn = (ms: number, texto: string) => {
    waitToEnd = true;
    setTimeout(() =>{
        console.log(texto)
        waitToEnd = false
    }, ms)
}

saludar("Hola")
saludar("adios")
saludar("adios")
saludar("adios")

//module.exports = { saludar, fn }

export {saludar, fn}