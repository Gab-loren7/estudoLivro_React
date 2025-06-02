/* 
    JSX é uma tecnologia criada com a finalidade de simplificar e facilitar a escrita de códigos JavaScript e amplamente usada em React.
    Trata-se de uma sintaxe declarativa que descreve, com uso de JS, HTML e CSS, a estrutura, o comportamento e a apresentação de um componente.
*/

// JavaScript puro
let elemento = document.createElement("h1");
let titulo = document.createTextNode("Livro React do Maujor");
const resultado = elemento.appendChild(titulo);
// Resultado: <h1>Livro React do Maujor</h1>

//sinatxe JSX
let minhaid = "topo";
const elemento2 = <div id={minhaid}>Topo</div>;
//Resultado: <div id="topo">Topo</div>;
