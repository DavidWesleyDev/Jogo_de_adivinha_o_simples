alert ('Tente adivinhar o numero que estou pensando de 1 a 10.')

let numeroSecreto = 8;
let chuteNumero = Number(prompt('chute um numero de 1 a 10'));

if(numeroSecreto == chuteNumero){
    alert('Você acertou o numero!')
} else{
    alert('Que pena! tente novamente')
}
