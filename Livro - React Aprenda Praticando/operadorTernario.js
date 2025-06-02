/* 
    o operador ternário fornece um sintaxe abreviada para a condicional if-else.

    let resultado = (condicao) ? (retorno se verdadeira) : (retorno se falsa);
*/

preco = 50

// Linguagem Crua
if (preco < 40) {
    console.log("Livro barato!");
} else {
    console.log("Livro não é barato!");
}

// Operador Ternário (if & else)
let resultado = (preco < 40) ? ("Livro barato!") : ("Livro não é barato!")
console.log(resultado);

// Operador Ternário aninhado escrito em multilinhas (else if)
resultado = (preco < 40)
    ? console.log("Livro barato!")
    : preco < 70
    ? console.log("livro não é barato e nem caro!")
    :console.log("Livro é caro!");