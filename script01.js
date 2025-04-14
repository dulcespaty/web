// Obtenemos todas las imágenes con la clase "imagen"
const imagenes = document.querySelectorAll('.imagen');

// Agregamos un evento de clic a cada imagen
imagenes.forEach(imagen => {
  imagen.addEventListener('click', function() {
    // Alternar entre tamaño inicial y tamaño agrandado
    if (imagen.style.width === '150px') {
      imagen.style.width = '300px'; // Tamaño agrandado
    } else {
      imagen.style.width = '150px'; // Tamaño inicial
    }
  });
});
