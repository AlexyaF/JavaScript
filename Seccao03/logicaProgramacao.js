//função que retorna maior numero entre dois numeros
function maxNum(a, b){
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    // usando operaççao ternaria 
    // return a > b ? a : b; - simplificado
    max = Math.max(num1, num2)
    return max
}
maiorN =  maxNum(5,10);
console.log(maiorN);

// arrow function
const maxNumArrowF = (a,b) => a > b? a:b;
console.log(maxNumArrowF(15, 68));

// ==============================================================================================

// função que retorna true para a imagem caso ela esteja em modo paisagem. e false se estiver em modo vertical
function ePaisagem(width, heigh){
    return width > heigh; // simplificado
    // return width > heigh ? true:false;- usando operaççao ternaria
}
console.log(ePaisagem(1080, 1920));

// arrow function
const ePaisagemArrowF = (width, heigh) => width > heigh;
console.log(ePaisagemArrowF(1080, 1920));

//==============================================================================================

//  Funçao que recebe um numero e classifica da seguinte forma:
//  Se for divisível por 3 = Fizz
//  Se for divisível por 5 = Buzz
//  Dívisivel por ambos = FizzBuzz
//  Não é divisível por nenhum = retorna o próprio número
//   - Checar se realmente é um número = retornar próprio número
//   - Função com números de 0 a 100

function fizzBuzz(n){
    if (Number.isNaN(n)){
        return n
    }
    
    if (n % 3 === 0 && n % 5 === 0){
        return 'FizzBuzz'
    }else if (n % 5 === 0) {
        return 'Buzz'
    }else if (n % 3 === 0){
        return 'Fizz'
    }else{
        return n
    }
}

console.log(fizzBuzz('a'));