//global
function retornaFuncao(){ //escopo mae
    const nome = 'alexya'; //closure, variavel fora do escopo filha
    return function(){ //escopo filha
        return nome;
    };
}

const funcao = retornaFuncao(); //variavel recebe a função
console.log(funcao);

// essa função tem acesso a tres escopos, o dela, o da mãe e o global