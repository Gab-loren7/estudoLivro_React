/* 
    Arrow Function é uma sintaxe simplificada para escrever funções

    let nomeDaVariavel = (parametro) => (return);

                        ou
    
    let nomeDaVariavel = (parametro) => (
        (return);
    )
*/


// Exemplo 1

// ES5
function saudacao() {
    return "Olá visitante"
};
console.log(saudacao());

// ES6
let saudacao2 = () => "Olá visitante";
console.log(saudacao2());

let saudacao3 = () => (
    "Olá visitante"
);
console.log(saudacao3());


/////////////////////////////////////////// Divisoria //////////////////////////////////////////////////////

// Exemplo 2

// ES5
function dobrar(x) {
    return 2 * x;
}
console.log(dobrar(5));

// ES6
let dobrar2 = (x) => 2 * x;
console.log(dobrar2(5));

let dobrar3 = (x) => {
    return 2 * x;
}
console.log(dobrar3(5));

/////////////////////////////////////////// Divisoria //////////////////////////////////////////////////////

// Exemplo 3

// ES5
function avaliar(x, y, z) {
    if (x < 10) {
        return y + z;
    } else {
        return y * z;
    }
};
console.log(avaliar(18, 15, 5));
console.log(avaliar(2, 3, 11));

// ES6
let avaliar2 = (x, y, z) => (x < 10) ? (y + z) : (y * z)
console.log(avaliar(18, 15, 5));
console.log(avaliar(2, 3, 11));

let avaliar3 = (x, y, z) => (
    (x < 10) // condição
    ? (y + z) // linha começa com ?
    : (y * z) // linha começa com :
);
console.log(avaliar(180, 150, 50));
console.log(avaliar(20, 30, 110));

// Dá pra fazer direto no log
console.log((x => 2 * x)(40));