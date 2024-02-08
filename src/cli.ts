import {Command} from 'commander'
import {debounce} from './index.js'
import figlet from 'figlet'

const program = new Command()
let userText = "";

if (process.argv[2] == "-h"){
    console.log(figlet.textSync("Saluda a tu ordenador!"));
}

program
    .command("s string")
    .action(() => {
        for (let i = 3; i < process.argv.length; i++){
            userText += process.argv[i] + " "
        }
        const saludoUsuario: string = `Usuario: ${userText}`
        SaludarOrdenador(saludoUsuario)
    })
    .description("Saluda al ordenador y te saluda de vuelta")

function SaludarOrdenador(userGreetings: string){
    console.log(userGreetings)
    const saludo: string = "Ordenador: Hola humano";
    /*const resultado = saludar(saludo, 500)
    console.log(resultado)*/
}

program.parse(process.argv)