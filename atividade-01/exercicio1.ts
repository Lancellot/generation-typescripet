import readline from 'readline-sync';

const cores: Array<string> = new Array<string>();
let contador: number = 0;

do {
    const cor: string = readline.question("\nDigite uma cor: ");
    cores.push(cor);
    contador++;
} while (contador < 5);

console.log("╔════════════════════════════╗");
console.log("║            Cores           ║");
console.log("╚════════════════════════════╝");
console.table(cores);

console.log("╔════════════════════════════╗");
console.log("║      Cores Ordenadas       ║");
console.log("╚════════════════════════════╝");
console.table(cores.sort());