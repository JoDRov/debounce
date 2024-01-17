export const saludar = (saludo: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(saludo)
        }, 1500)
    })
}