"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const figlet_1 = __importDefault(require("figlet"));
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("Saluda a tu ordenador!"));
program
    .version("1.0.0")
    .description("El ordenador te saluda")
    .option("-s, --saludar <saludo>", "saluda al ordenador y te saluda de vuelta")
    .parse(process.argv);
const options = program.opts();
function SaludarOrdenador() {
    const saludo = "Ordenador: Hola humano";
    const resultado = (0, index_1.saludar)(saludo);
    console.log(resultado);
    return resultado;
}
if (options.s) {
    console.log("Usuario: " + options.s);
    SaludarOrdenador();
}
//# sourceMappingURL=cli.js.map