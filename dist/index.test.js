"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe("deberia devolver un saludo", () => {
    test("devuelve un saludo", () => {
        const saludo = "Hola humano";
        function saludar() {
            console.log(saludo);
            return saludo;
        }
        expect(saludar()).toBe(saludo);
    });
    test("deberia esperar 500 ms para enviar el saludo", () => __awaiter(void 0, void 0, void 0, function* () {
        const saludo = "Hola humano";
        const saludar = (saludo) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(saludo);
                }, 500);
            });
        };
        const start = Date.now();
        const resultado = yield saludar(saludo);
        const tiempoTranscurrido = Date.now() - start;
        expect(resultado).toBe(saludo);
        expect(tiempoTranscurrido).toBeGreaterThan(499);
    }));
});
