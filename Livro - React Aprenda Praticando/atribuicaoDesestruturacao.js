/* 
    Recurso que simplifica o acesso aos dados contidos em arrays ou objetos, criando-se variáveis que armazenam os dados.
*/

// Exemplo 1 - Desestruturação de um array

// ES5
const livros_1 = ["CSS3", "HTML5", "JavaScript", "React"];
console.log(livros_1[0]); // CSS3
console.log(livros_1[3]); // React

// ES6
const livros_2 = ["CSS3", "HTML5", "JavaScript", "React"];
let [css, html5, js, react] = livros_2; //Aqui a desestruturação
console.log(css); //CSS3
console.log(react); //React

// Exemplo 2 - Desestruturação de um objeto

// ES5
const livros_3 = [
    { titulo: "React", autor: "Maurício Samy Silva" },
    { titulo: "Node Essencial", autor: "MRicardo R. Lecheta" },
    { titulo: "UX Design", autor: "Will Grant" }
];
console.log(livros_3[0].titulo); // React
console.log(livros_3[2].autor); // Will Grant

// ES6
const livros_4 = [
    { titulo: "React", autor: "Maurício Samy Silva" },
    { titulo: "Node Essencial", autor: "MRicardo R. Lecheta" },
    { titulo: "UX Design", autor: "Will Grant" }
];
let [lUm, lDois, lTres] = livros_4;
console.log(lUm.titulo); // React
console.log(lTres.autor); // Will Grant