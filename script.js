function saludar() {
    alert("¡Bienvenido a mi página web!");
}
<div id="carrito" class="carrito">

<h2>🛒 Mi carrito</h2>

<div id="listaCarrito"></div>

<button onclick="cerrarCarrito()">Cerrar</button>

</div>
let cantidad = 0;

function abrirCarrito() {
    document.getElementById("carrito").classList.add("activo");
}

function cerrarCarrito() {
    document.getElementById("carrito").classList.remove("activo");
}

function agregarAlCarrito(nombre, precio) {
    cantidad++;
    document.getElementById("contador").innerText = cantidad;

    const lista = document.getElementById("listaCarrito");

    lista.innerHTML += `
        <p>${nombre} - $${precio}</p>
    `;
}