// //     inicio   fim   passos/incrementação
// for (let i = 0; i <=100; i+= 10) { //incrementar +1 --> i++
//     console.log(i);
// } // NAO TEM PONTO E VIRGULA NO FINAL!!!


// //Invertido -- decrementar
// for (let i = 500; i >=10; i -= 100) { 
//     console.log(i);
// }


//Atribuir valor auma variavel dentro do loop seguindo uma condição
for (let i = 0; i <=100; i+= 10) { //incrementar +1 --> i++
    const par = i % 2 ===0; // sem definir valores
    console.log(i, par)
} 


//Atribuir valor auma variavel dentro do loop seguindo uma condição
for (let i = 0; i <=100; i+= 17) { //incrementar +1 --> i++
    const par = i % 2 ===0? 'PAR' : 'IMPAR'; //definindo valores
    console.log(i, par)
} 


//Exemplos
const frutas = ['UVA', 'MAÇA', 'BANANA'];
for (let i = 0; i< frutas.length; i++){
    console.log(frutas[i])
};