/* 
    O operador spread destina-se a expandir um array, um objeto ou uma string. O simbolo é constituido por (...).
*/

const livros1 = ["CSS3", "JavaScript", "PHP"];
const livros2 = ["HTML5", "React"];
const precos = [70, 30, 90, 100, 10];

// Exemplo 1
let livros_1 = livros1 + livros2;
console.log(livros_1);

// Exemplo 2
let livros_2 = [livros1] + [livros2];
console.log(livros_2);

// Exemplo 3
let livros_3 = [...livros1, ...livros2];
console.log(livros_3);

// Exemplo 4
let precoMaximo_1 = Math.max(precos);
console.log(precoMaximo_1);

// Exemplo 5
let precoMaximo_2 = Math.max(...precos);
console.log(precoMaximo_2);