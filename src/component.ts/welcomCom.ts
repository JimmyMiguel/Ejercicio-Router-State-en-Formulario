
export class welcomeCom extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    render() {
      const shadow = this.attachShadow({ mode: "open" });
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

  
  
  /* Nuevo contenedor para el formulario */
  .form-container {
    padding: 1rem;
    max-width: 480px; /* Ancho base para móviles */
    margin: 0 auto; /* Centra el contenedor */
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0 2rem 0;
  }

  p {
    font-size: 1rem;
    margin: 0 0 2rem 0;
    text-align: center;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  input[type="text"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 1rem;
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
  }

  button:hover {
    background-color: darkblue;
  }


  
  /* --- RESPONSIVE --- */
  /* Para pantallas más grandes (tablets, desktop) */
  @media (min-width: 768px) {
    .form-container {
      max-width: 600px; /* Aumentamos el ancho máximo del formulario */
    }
  }

</style>

<div class="header-div">
  <h2>Header</h2>
</div>

<div class="form-container">
  <h1>Te damos la bienvenida a esta página</h1>
  <p>Para continuar ingresá tu nombre</p>
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" placeholder="Ingrese su nombre" name="nombre" />
  <button>Comenzar</button>
</div>


      `;
    }
  }

  