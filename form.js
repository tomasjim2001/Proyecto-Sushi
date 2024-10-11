

// Abre la ventana modal y muestra la imagen seleccionada
function openModal(imageSrc, title, price) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    modalPrice.textContent = price;
    
}

// Cierra la ventana modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

