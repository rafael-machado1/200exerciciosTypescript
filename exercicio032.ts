//Usando  um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador
const prompt = require('prompt-sync')();

console.log('Pedra, Papel e Tesoura!')
const escolhas = [1, 2, 3]; //Pedra (1), Papel(2) ou Tesoura (3)
const machine = Math.floor((Math.random) * escolhas.length)
const escolhaJogadas = parseInt(prompt('Digite quantas jogos quer ter (Máximo de 100 jogos):'));

if(escolhaJogadas < 2 || escolhaJogadas === isNaN){
  console.log('Digite um número válido')
} else {
  do{
    const  escolhaUsuario = parseInt(prompt('Digite sua escolha para: Pedra (1), Papel(2) ou Tesoura (3)'))
      if(escolhaUsuario == machine){
        console.log('Empate')
      } else if (escolhaUsuario ){
        
      }
  } while(escolhaJogadas <= 100)
}