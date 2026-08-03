function saludar() {
    alert("¡Bienvenido a mi página web!");
}
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
function comprarProducto(nombreProducto) {

    let talla = event.target.parentElement.querySelector(".selector-talla").value;

    let mensaje =
    "Hola 👋, estoy interesado en " +
    nombreProducto +
    ". Talla: " +
    talla +
    ". ¿Está disponible?";

    window.open(
        "https://wa.me/573217077859?text=" +
        encodeURIComponent(mensaje),
        "_blank"
    );
}