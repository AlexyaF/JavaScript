
//1° maneira
let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

let temporaria;

temporaria = varA
varA = varB;
varB = varC;
varC = temporaria;

console.log(varA, varB, varC)

// 2° maneira
varA = "A"; //B
varB = "B"; //C
varC = "C"; //A
[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)