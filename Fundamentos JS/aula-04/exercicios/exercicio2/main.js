import { subtrair } from "./funcoes.js";
import { somar } from "./funcoes.js";

let dados = parseFloat(prompt("Escolha uma opção:\n1. Somar\n2. Subtrair"));

if (dados === 1) {
    let somaX = parseFloat(prompt("Insira o primeiro valor:"))
    let subY = parseFloat(prompt("Insira o segundo valor:"))
    somar(somaX,subY)
}else if (dados === 2) {
    let subX = parseFloat(prompt("Insira o primeiro valor:"))
    let subY = parseFloat(prompt("Insira o segundo valor:"))
    subtrair(subX,subY)
}else if (isNaN(dados) || dados !== 1 || 2){
    alert ("insira um valor valido")
}
