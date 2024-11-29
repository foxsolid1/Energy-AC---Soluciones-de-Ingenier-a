document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las imágenes de la galería
    const images = document.querySelectorAll(".galeria img");
    
    // Crea un modal dinámico
    const modal = document.createElement("div");
    modal.classList.add("img-overlay"); // Asegúrate de que la clase coincida con tu CSS
    document.body.appendChild(modal);
  
    // Imagen dentro del modal
    const modalImage = document.createElement("img");
    modal.appendChild(modalImage);
  
    // Añade evento a cada imagen para mostrarla en grande
    images.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = img.src; // Muestra la imagen seleccionada
        });
    });
  
    // Cierra el modal al hacer clic fuera de la imagen
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
