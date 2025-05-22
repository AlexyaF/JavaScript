const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let n of numeros){
    if (n === 2){ // se o numero for igual a 2, vai pular qualquer bloco restante da estrutura e voltar do inicio.
        continue;
    }

    if (n ===7){
        break; // se o numero for igual a 7 o bloco de repetição nao vai mais ser executado
    }

    console.log(n);
}