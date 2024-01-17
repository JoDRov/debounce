describe("deberia devolver un saludo", () => {
    test("devuelve un saludo", () => {
        const saludo = "Hola humano";
        function saludar() {
            console.log(saludo);
            return saludo;
        }
        expect(saludar()).toBe(saludo);
    });
    test("deberia esperar 500 ms para enviar el saludo", async () => {
        const saludo = "Hola humano";
        const saludar = (saludo) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(saludo);
                }, 500);
            });
        };
        const startTime = Date.now();
        const resultado = await saludar(saludo);
        const tiempoTranscurrido = Date.now() - startTime;
        expect(resultado).toBe(saludo);
        expect(tiempoTranscurrido).toBeGreaterThan(499);
    });
});
export {};
//# sourceMappingURL=index.test.js.map