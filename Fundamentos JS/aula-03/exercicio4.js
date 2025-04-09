//Gera um numero aleatorio entre 0 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//cria um numero max de tentativas
const maxTentativas = 10;
let tentativas = 0;

//cria um loop para adivinhar as tentativas
 for(tentativas = 1; tentativas <= maxTentativas; tentativas++){
    const palpite = parseInt(prompt(`tentativa ${tentativas} / ${maxTentativas}. adivinhe o numero entre 1 e 100:`));

    //isNan é uma função para retornar valores boleanos pra quando nao é um numero
    if(isNaN(palpite) || palpite < 1 || palpite > 100 ){
        alert("Insira um numero valido de 1 a 100")
    } else if(palpite < numeroAleatorio){
        alert("O numero é maior");
    } else if(palpite > numeroAleatorio){
        alert("O numero é menor");
    } else if(palpite === numeroAleatorio){
        alert("Voce acertou!");
        break
    }
}

if(tentativas > maxTentativas){
    alert(`Voce atingiu o numero maximo de tentativas! (o numero era + ${numeroAleatorio})`)
}