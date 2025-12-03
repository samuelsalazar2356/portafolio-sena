document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-contacto");
    const mensajeEstado = document.getElementById("mensaje-estado");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // Mostrar mensaje
        mensajeEstado.style.display = "block";

        // Limpiar formulario
        formulario.reset();

        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            mensajeEstado.style.display = "none";
        }, 3000);
    });
});
