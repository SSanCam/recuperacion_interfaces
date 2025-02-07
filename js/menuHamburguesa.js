document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuHamburguesa = document.querySelector(".menu-hamburguesa");
    const icono = document.querySelector(".menu-toggle img");

    if (menuToggle && menuHamburguesa && icono) {
        menuToggle.addEventListener("click", function () {
            menuHamburguesa.classList.toggle("active");

            if (menuHamburguesa.classList.contains("active")) {
                icono.src = "../media/iconos/MHamburguesa.png";
            } else {
                icono.src = "../media/iconos/menu-hamburguesa.png";
            }
        });
    }
});
