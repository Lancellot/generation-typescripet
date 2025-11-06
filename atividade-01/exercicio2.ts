import readline from 'readline-sync';

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

const numero: number = readline.questionInt("\nDigite um número: ");

const indice = numeros.indexOf(numero);

if (indice !== -1) {
    console.log(`\nO número ${numero} foi encontrado no índice ${indice}.`);
} else {
    console.log(`\nO número ${numero} não foi encontrado.`);
}