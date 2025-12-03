document.addEventListener('DOMContentLoaded', function () {

    /* =====================================================
       CARRUSEL
    ====================================================== */
    (function () {
        const diapositivas = document.querySelectorAll('.diapositiva');
        const puntos = document.querySelectorAll('.punto');

        if (diapositivas.length === 0 || puntos.length === 0) return;

        let indice = 0;
        let intervalo = null;

        function mostrarDiapositiva(i) {
            indice = (i + diapositivas.length) % diapositivas.length;
            diapositivas.forEach((img, pos) => img.classList.toggle('activa', pos === indice));
            puntos.forEach((p, pos) => p.classList.toggle('activo', pos === indice));
        }

        puntos.forEach(punto =>
            punto.addEventListener('click', e =>
                mostrarDiapositiva(parseInt(e.target.dataset.index))
            )
        );

        function iniciarIntervalo() {
            if (intervalo) clearInterval(intervalo);
            intervalo = setInterval(() => mostrarDiapositiva(indice + 1), 5000);
        }

        mostrarDiapositiva(0);
        iniciarIntervalo();
    })();


    /* =====================================================
MENÚ MÓVIL (cerrar al hacer clic)
    ====================================================== */
    (function () {
        const toggle = document.getElementById('toggle-menu');
        const menuLinks = document.querySelectorAll('.menu-link');

        if (!toggle || menuLinks.length === 0) return;

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggle.checked = false;
            });
        });
    })();


    /* =====================================================
FORMULARIO SIMPLE
    ====================================================== */
    (function () {
        const form = document.getElementById('form-contacto');
        const estado = document.getElementById('mensaje-estado');

        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const requireds = Array.from(form.querySelectorAll('[required]'));
            let valido = true;

            requireds.forEach(input => {
                if (!input.value.trim()) {
                    valido = false;
                    input.focus();
                }
            });

            if (!valido) {
                estado.style.display = 'block';
                estado.style.color = 'crimson';
                estado.textContent = 'Por favor completa los campos obligatorios.';
                setTimeout(() => estado.style.display = 'none', 2500);
                return;
            }

            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'Enviando...';
            }

            setTimeout(() => {
                form.reset();

                if (btn) {
                    btn.disabled = false;
                    btn.textContent = 'Enviar';
                }

                estado.style.display = 'block';
                estado.style.color = 'green';
                estado.textContent = 'Tu mensaje fue enviado correctamente.';

                setTimeout(() => estado.style.display = 'none', 4000);

            }, 800);
        });
    })();

});
