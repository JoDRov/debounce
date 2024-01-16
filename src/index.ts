const saludo: string = "Hola humano";

const saludar = (saludo: string) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saludo)
        }, 500)
    })
}