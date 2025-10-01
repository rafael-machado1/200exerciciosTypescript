//Declare duas variáveis e atribua valores numéricos a elas. Use o operador de adição para realizar operações entre as duas variáveis. Imprima o resultado.
import * as readline from 'node:readline/promises';
import { stdin, stdout} from 'node:process';

const rl = readline.createInterface({input: stdin, output: stdout});

async function soma(){
  const rep1 = await rl.question('Escolha um número');
  const n1 = parseInt(rep1);

  const rep2 = await rl.question('Escolha um número');
  const n2 = parseInt(rep2);

  rl.close();
  console.log(`O resultado da soma é ${n1 + n2}`);
}
soma();