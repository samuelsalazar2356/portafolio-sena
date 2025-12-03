document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    const estado = document.getElementById("mensaje-estado");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Mostrar mensaje
        estado.style.display = "block";

        // Limpiar formulario
        form.reset();

        // Ocultar el mensaje después de unos segundos (opcional)
        setTimeout(() => {
            estado.style.display = "none";
        }, 3000);
    });
});
