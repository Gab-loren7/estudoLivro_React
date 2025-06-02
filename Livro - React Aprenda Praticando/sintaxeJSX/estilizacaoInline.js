/* 
    Estilização inline é perfeitamente normal em React, embora em sintaxe JSX a aplicação de estilos seja diferente daquela usada em HTML.
*/

// Objeto contendo estilização definido e aplicado inline por referência
<p style={{ color: "red", fontsize: "28px", textTransform: "uppercasa" }}>
    Texto estilizado inline
</p>

//Objeto contendo estilização difinido e aplicado inline por referência.
let estilosInline = {
    color: "red",
    fontsize: "28px",
    textTransform: "uppercasa"
};

< p style={ estilosInline } >Texto estilizado inline</p >