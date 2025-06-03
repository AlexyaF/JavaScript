try{
 //executado quando não há erros
} catch(e) {
//executado quando há erros
} finally{
    //sempre
}

function retornaHora(data){
    if (data && ! (data instanceof Date)){
        throw new TypeError('Esperando instância de data');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false 
    });
}

try {
const hora = retornaHora('e');
console.log(hora);
} catch (e) {
    console.log(e);
} finally {
    console.log('Fim');
}