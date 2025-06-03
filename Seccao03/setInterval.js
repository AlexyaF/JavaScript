function retornaHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false 
    });
}

// function funcaoDoInterval (){
//     console.log(retornaHora());
// }

// setInterval(funcaoDoInterval, 1000);

const timer = setInterval(function(){
    console.log(retornaHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
    console.log('paro!')
}, 3000)

setTimeout(function(){
    console.log('TESTE');
}, 5000)