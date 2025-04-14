let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transform = `translateX(${-index * 100}%)`;
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Cambio de imágenes cada 3 segundos
setInterval(() => {
    moveSlide(1);
}, 3000);

//carrusel estatico
let indice = 0;
const total = 4;
const carrusel = document.getElementById("carrusel");

function cambiarImagen(direccion) {
    indice = (indice + direccion + total) % total;
    carrusel.style.transform = `translateX(${-indice * 600}px)`;
}


