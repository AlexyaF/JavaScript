function falarFrase(comeco){
    function falarResto(resto){
        return comeco + ' ' + resto;
    }
    return falarResto
}

const olaMundo = falarFrase('Olá');
console.log(olaMundo('mundo!'))