function Header() {
    return React.createElement("Header", { className: "topo" },
        React.createElement("h1", { className: "logo" }, "Editora MaujorTec"));
};

ReactDOM.render(Header(), document.getAnimations("root"));

function Principal() {
    return React.createElement("div", { className: "principal" }, "Coluna principal");
};

ReactDOM.render(Principal(), document.getElementById("root"));

function Topo() {
    return React.createElement("div", { className: "c-topo" },
        Header(),
        Navegacao()
    );
};

ReactDOM.render(Topo(), document.getElementById("root"))

function Navegacao() {
    return React.createElement("div", { className: "navegacao" }, "Coluna de navegação");
};

ReactDOM.render(Navegacao(), document.getElementById("root"));

function Footer() {
    return React.createElement("footer", { className: "rodape" }, React.createElement("p", null, "Rodapé"));
};

ReactDOM.render(Footer(), document.getElementById("root"));

function App() {
    return React.createElement(React.Fragment, null,
        Tpo(),
        Principal(),
        Footer()
    );
};
ReactDom.render(App(), document.getElementById("tudo"));

/*
    O que significa React.Fragment? Quando reunimos o topo no componente "Topo", o container do componente App, nomeando-o div.app . Ao injetalo no DOM dentro do container div.tudo (nessa exemplo usamos id = "tudo", e não id = "root"), o resultado seria conforme mostrado a seguir.

    <div id="tudo">
        <div class="app">
            <header class="topo">...</header>
            ...
        </div><!-- /.app -->
    </div><!-- /.tudo -->
*/
