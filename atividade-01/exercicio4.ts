import readline from 'readline-sync';

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

const numero: number = readline.questionInt("\nDigite um numero: ");

numeros.has(numero)
    ? console.log(`O numero ${numero} foi encrontrado!`)
    :  console.log(`O numero ${numero} não foi encrontrado!`);