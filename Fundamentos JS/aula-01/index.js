const nome = prompt("Qual o seu nome?");
let idade = prompt("Qual sua idade?");

idade = parseFloat(idade);

alert(`Seu nome é ${nome} e você tem ${idade} anos. 
    Ano que vem você terá ${idade + 1}`);
