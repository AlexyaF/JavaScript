const nome = 'alexya';

function falarNome(){
    console.log(nome);
}

falarNome();

// Escopo léxico diz que a função “enxerga” as variáveis do lugar onde foi escrita.
// uma função sempre dá preferência à variável mais próxima no escopo léxico onde ela foi definida.