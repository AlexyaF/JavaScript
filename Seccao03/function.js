// First-class objects (Objetos de primeira classe) - pode ser usada como dado
// Declaração de função (Function hoisting) - eleva a função ao incicio do código
function falaOi(){
    console.log('oi');
}

// Function expression - criar função e atribuir á uma variável
const souUmDado = function(){
    console.log('oi');
};


//Arrow function
const funcaoArrow = () => {
    console.log('oi');
};

//Dentro de um objeto
const obj = {
    falar: function(){
        console.log('oi');
    }
};
obj.falar();
