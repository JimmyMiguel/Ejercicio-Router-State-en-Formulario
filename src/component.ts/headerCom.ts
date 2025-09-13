export class headerCom extends HTMLElement {

    constructor(){
        super()
        this.render()

    }
    render(){
        const shadow =  this.attachShadow({mode:'open'})
        shadow.innerHTML = `
        
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
            <style>
            :host {
                display: block;
                font-family: 'Poppins', sans-serif;
                box-sizing: border-box;
                /* Agregamos padding-bottom para que el contenido no quede oculto detrás del footer fijo */
                padding-bottom: 60px; 
            }

            .header-div {
                width: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                background-color: rgba(255, 130, 130, 1);
                /* Opcional: para que se quede fijo al hacer scroll */
                position: sticky;
                top: 0;
            }

            .header-div h2{
                color: black;
                font-weight: 500;
                margin: 0;
            }


            </style>

                <div class="header-div">
                <h2>Header</h2>
                </div>


            `
    }

}