export class formularioCom extends HTMLElement {

    constructor() {

        super();
        this.render()
    }
    render() {
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = `
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
            <style>
            :host {
                display: block;
                font-family: 'Poppins', sans-serif;
                box-sizing: border-box;
                padding-bottom: 60px; 
            }

            .header-div,
            .footer-div {
                width: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            
            .form-container {
                padding: 1rem;
                max-width: 480px;
                margin: 0 auto;
            }

            h2 {
                font-size: 1.75rem;
                text-align: center;
                margin: 1rem 0 0.5rem 0;
            }

            p {
                font-size: 1rem;
                margin: 0 0 1.5rem 0;
                text-align: center;
            }

            label {
                display: block;
                font-size: 1rem;
                margin-bottom: 0.25rem;
            }

            input[type="text"],
            input[type="email"],
            select {
                width: 100%;
                padding: 0.5rem;
                font-size: 1rem;
                border: 1px solid black;
                border-radius: 8px;
                box-sizing: border-box;
                margin-bottom: 1rem;
                font-family: 'Poppins', sans-serif; 
                /* Apariencia para que se vea como un desplegable nativo */
                appearance: none;
                background-position: right .7em top 50%;
                background-size: .65em auto;
            }
            
            button {
                width: 100%;
                padding: 0.75rem;
                font-size: 1rem;
                color: white;
                background-color: blue;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                margin-top: 1rem;
            }

            button:hover {
                background-color: darkblue;
            }

            .footer-div {
                height: 60px;
                background-color: pink;
                color: black;
                position: fixed;
                bottom: 0;
                left: 0;
            }
            
            @media (min-width: 768px) {
                .form-container {
                max-width: 600px;
                }
            }

            </style>
            <div class="form-container">
            <h2>Hola soy Jimmy</h2>
            <p>Necesitamos algunos datos más</p>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="tu.correo@ejemplo.com" />
            
            <label for="comida">Comida favorita</label>
            <input type="text" id="comida" name="comida" placeholder="Ej: Pizza" />

            <label for="opciones">Elija una de estas opciones</label>
            <select name="opciones" id="opciones">
                <option value="">-- Por favor, elija una opción --</option>
                <option value="pizza">Pizza</option>
                <option value="hamburguesa">Hamburguesa</option>
                <option value="sushi">Sushi</option>
                <option value="pasta">Pasta</option>
                <option value="ensalada">Ensalada</option>
            </select>

            <button>Enviar</button>
            </div>

            <footer class="footer-div">
            <p>footer</p>
            </footer>
        `
    }
}