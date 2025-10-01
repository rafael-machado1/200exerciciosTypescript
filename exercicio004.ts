//Declare duas variáveis chamadas "nome" e "sobrenome", atribua o seu nome e sobrenome a elas. Concatene-as em uma terceira variável chamada "nomeCompleto" e imprima.
const nome:unknown = prompt('Digite seu nome');
const sobrenome:unknown = prompt('Digite seu sobrenome');
const nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto);