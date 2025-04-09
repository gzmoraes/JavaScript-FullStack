let Numero = parseFloat(prompt("TABUADA\nEscolha um número!"))
let texto = ""

for(let i = 1; i <= 10; i++){
    let resultado = Numero * i
    texto += `${Numero} X ${i} = ${resultado}\n`
}

alert(texto)