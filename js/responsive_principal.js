document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuHamburguesa = document.querySelector(".menu-hamburguesa");
    const icono = document.querySelector(".menu-toggle img");
    const footerToggle = document.querySelector(".footer-toggle");
    const footerMobile = document.querySelector(".footer-mobile");

    if (menuToggle && menuHamburguesa && icono) {
        menuHamburguesa.classList.remove("active");

        menuToggle.addEventListener("click", function () {
            menuHamburguesa.classList.toggle("active");

            if (menuHamburguesa.classList.contains("active")) {
                icono.src = "../media/iconos/MHamburguesa.svg";
            } else {
                icono.src = "../media/iconos/menu-hamburguesa.svg";
            }
        });
    }

    if (footerToggle && footerMobile) {
        footerToggle.addEventListener("click", function () {
            footerMobile.classList.toggle("active");
        });
    }

    // Ajuste de fuentes y espaciado en pantallas pequeñas
    function ajustarTexto() {
        const textos = document.querySelectorAll("h1, h2, p");
        if (window.innerWidth <= 768) {
            textos.forEach(texto => {
                texto.style.textAlign = "center";  
            });
        }
    }
    ajustarTexto();
    window.addEventListener("resize", ajustarTexto);
});