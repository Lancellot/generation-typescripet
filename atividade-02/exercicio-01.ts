import { Queue } from './Queue.ts'
import readline from 'readline-sync';

const fila = new Queue<string>();
let continua: boolean = true;

do {

    console.log('\n*********************************************************');
    console.log('\n           1 - Adicionar Cliente na Fila');
    console.log('           2 - Listar todos os Clientes');
    console.log('           3 - Retirar Cliente da Fila');
    console.log('           0 - Sair');
    console.log('\n*********************************************************');

    const opcao: number = readline.questionInt('Entre com a opção desejada: ');
    console.clear();

    switch (opcao) {
        case 1:
            const nome = readline.question('\nDigite o nome do cliente: ');
            fila.enqueue(nome)
            console.log('\nFila: \n');
            fila.printQueue();
            console.log(`\nCliente adicionado!`);

            break;

        case 2:
            console.log('\nLista de Clientes na Fila: \n');
            fila.printQueue();

            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("\nA fila está vazia!");
            } else {
                const clienteChamado = fila.dequeue();
                console.log("\nCliente foi chamado!\n");
                console.log("\nFila:\n");
                fila.printQueue();
            }

            break;
        case 0:
            continua = false;
            console.log('\nPrograma Finalizado!\n');

            break;
        default:
            break;
    }
} while (continua);