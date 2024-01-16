import {Command} from 'commander'
import {saludar} from './index'
import figlet from 'figlet'

const program = new Command()

console.log(figlet.textSync("Saluda a tu ordenador!"));

program
    .version("1.0.0")
    .description("El ordenador te saluda")
    .option ("-s, --saludar <saludo>", "saluda al ordenador y te saluda de vuelta")
    .parse (process.argv)

const options = program.opts();

function SaludarOrdenador(){
    const saludo: string = "Ordenador: Hola humano";
    const resultado = saludar(saludo)
    console.log(resultado)
    return resultado;
}

if (options.s){
    console.log("Usuario: " + options.s)
    SaludarOrdenador()
}

