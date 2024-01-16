export const saludar = (saludo: string) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saludo)
        }, 500)
    })
}