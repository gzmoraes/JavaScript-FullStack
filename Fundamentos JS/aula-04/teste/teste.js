let dados = parseFloat(prompt("Escoha uma opção:\n1. Subtrair\n2. Multiplicar"))

function subtrair(x,y){
    let resultado = x - y 
    alert (`${x} - ${y} = ${resultado}`)
}

function multiplicar(a,b){
    let multRes = a * b
    alert (`${a} X ${b} = ${multRes}`)
}

if (dados === 1){
    let subX = prompt("Insira o primeiro valor:")
    let subY = prompt("Insira o segundo valor:")
    subtrair(subX,subY)
}else if (dados === 2){
    let multX = prompt("Insira o primeiro valor:")
    let multY = prompt("Insira o segundo valor:")
    multiplicar(multX,multY)
}else if (isNaN(dados) || dados !== 1 || 2){
    alert ("insira um valor valido")
    dados = parseFloat(prompt("Escoha uma opção:\n1. Subtrair\n2. Multiplicar"))
}

   