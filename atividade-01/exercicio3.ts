import readline from 'readline-sync';

const numeros: Set<number> = new Set<number>();
let contador: number = 0;

for(contador ; contador < 10; contador++) {
    const numero: number = readline.questionInt("\nDigite um numero: ");
    numeros.add(numero);
}

console.table(numeros);