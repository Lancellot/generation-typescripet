import { Stack } from './Stack.ts';
import readline from 'readline-sync';

const pilha = new Stack<string>();
let continua: boolean = true;

do {
    console.log('\n*********************************************************');
    console.log('           1 - Adicionar Livro na Pilha');
    console.log('           2 - Listar todos os Livros');
    console.log('           3 - Retirar Livro da Pilha');
    console.log('           0 - Sair');
    console.log('*********************************************************\n');

    const opcao: number = readline.questionInt('Entre com a opção desejada: ');
    console.clear();

    switch (opcao) {
        case 1:
            const livro = readline.question('\nDigite o nome do livro: ');
            pilha.push(livro);
            console.log('\nLivro adicionado à pilha!\n');
            break;

        case 2:
            console.log('\nLista de Livros na Pilha:\n');
            pilha.printStack();
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log('\nA pilha está vazia!\n');
            } else {
                const removido = pilha.pop();
                console.log(`\nUm livro foi retirado da pilha.\n`);
            }
            break;

        case 0:
            continua = false;
            console.log('\nPrograma Finalizado!\n');
            break;

        default:
            console.log('\nOpção inválida! Tente novamente.\n');
            break;
    }

} while (continua);
