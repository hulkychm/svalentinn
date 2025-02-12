document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const albumButton = document.getElementById("album-button");

    window.abrirCarta = function () {
        card.style.transform = "rotateY(180deg)";
        setTimeout(() => {
            albumButton.style.display = "block"; // Muestra el botón después de abrir la carta
        }, 500);
    };

    window.cerrarCarta = function () {
        card.style.transform = "rotateY(0deg)";
        albumButton.style.display = "none"; // Oculta el botón al cerrar la carta
    };
});
