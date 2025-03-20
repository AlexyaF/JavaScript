// = atribuição
// == igualdade
// === igualdade restrita (recomendavel)
// != diferente
// !== diferente estrito (recomendavel)

const num1 = 10; //number
const num2 = "10"; //string

const comp1 = num1 == num2; // correção de tipos, a linguagem vai assumir alguma conversão por isso reotrna true
console.log(comp1)
const comp2 = num1 === num2; 
console.log(comp2)  // com a igualdade restrita ele nao pressume nenhum valor

const comp3 = num1 !== num2;
console.log(comp3)
const comp4 = num1 != num2;
console.log(comp4)