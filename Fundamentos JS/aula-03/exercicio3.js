let totalNotas = 0;
let quantidadeNotas = 0;
let notas;

do{
    notas = parseFloat(prompt("MEDIA DE NOTAS\ndigite a nota do aluno: (caso queira parar, digite -1)"))

    if(notas !== -1){
        totalNotas += notas;
        quantidadeNotas++;
    }

} while(notas !== -1);

if(quantidadeNotas === 0) {
    alert("Nenhuma nota foi inserida!")
} else {
    let media = totalNotas / quantidadeNotas;
    alert("A média de notas é: " + media.toFixed(2));
}