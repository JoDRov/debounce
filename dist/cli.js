#!/usr/bin/env node
import { Command } from 'commander';
import { saludar } from './index.js';
import figlet from 'figlet';
// Declare the program
const program = new Command();
// Add actions onto de CLI
console.log(figlet.textSync("Saluda a tu ordenador!"));
program
    .command("s string")
    .option("-s, --s <string>", "Saluda a tu ordenador")
    .action((userString) => {
    console.log(`Usuario: ${userString}`);
    SaludarOrdenador();
})
    .description("Saluda al ordenador y te saluda de vuelta");
async function SaludarOrdenador() {
    const saludo = "Ordenador: Hola humano";
    const resultado = await saludar(saludo);
    console.log(resultado);
}
const options = program.opts();
if (options.s) {
    console.log("Usuario: " + options.s);
    SaludarOrdenador();
}
program.parse(process.argv);
//# sourceMappingURL=cli.js.map