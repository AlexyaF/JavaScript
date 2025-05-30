// try{
//     console.log(naoExiste);
// } catch (e){
//     console.log('Erro: ', e)
// }

function soma(x, y){
    if (
        typeof x !== 'number' || 
        typeof y !== 'number')
    {
        throw new ReferenceError("Não é um numero"); //lançar erros
    }
    return x + y;
}

try{ //capturar erros
    console.log(soma(1, 3)); 
    console.log(soma(1, 'b'));
} catch (e){
    console.log(e);
}