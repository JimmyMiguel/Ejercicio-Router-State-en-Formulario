export class footerCom extends HTMLElement {

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

            .footer-div {
                width: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
            }


            .footer-div h2 {
                color: black;
                font-weight: 500;
                margin: 0;
            }
            
         
            /* --- FOOTER --- */
            .footer-div {
                height: 60px;
                background-color: pink;
                color: black;
                /* Clave para que siempre esté abajo */
                position: fixed;
                bottom: 0;
                left: 0;
            }


            </style>
            <footer class="footer-div">
            <h2>Footer</h2>
            </footer>
            `
    }

}