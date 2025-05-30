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