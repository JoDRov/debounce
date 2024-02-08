#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const program = new commander_1.Command();
let userText = "";
if (process.argv[2] == "-h") {
    console.log(figlet_1.default.textSync("Saluda a tu ordenador!"));
}
program
    .command("s string")
    .action(() => {
    for (let i = 3; i < process.argv.length; i++) {
        userText += process.argv[i] + " ";
    }
    const saludoUsuario = `Usuario: ${userText}`;
    SaludarOrdenador(saludoUsuario);
})
    .description("Saluda al ordenador y te saluda de vuelta");
function SaludarOrdenador(userGreetings) {
    console.log(userGreetings);
    const saludo = "Ordenador: Hola humano";
    /*const resultado = saludar(saludo, 500)
    console.log(resultado)*/
}
program.parse(process.argv);
//# sourceMappingURL=cli.js.map