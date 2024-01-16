describe("deberia devolver un saludo", () => {
    test("devuelve un saludo", () => {
        const saludo: string = "Hola humano";

        function saludar(){
            console.log(saludo);
            return saludo;
        }

        expect(saludar()).toBe(saludo);
    })

    test ("deberia esperar 500 ms para enviar el saludo", async () => {
        const saludo: string = "Hola humano";
        const saludar = (saludo: string) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(saludo)
                }, 500)
            })
        }

        const startTime = Date.now();
        const resultado = await saludar(saludo);
        const tiempoTranscurrido = Date.now() - startTime;
        
        expect(resultado).toBe(saludo);
        expect(tiempoTranscurrido).toBeGreaterThan(499)
    })
})