import React from "react";

function Gallery() {
  const images = [
    "https://via.placeholder.com/200x150?text=Sembrado",
    "https://via.placeholder.com/200x150?text=Riego",
    "https://via.placeholder.com/200x150?text=Medio+Ambiente",
  ];

  return (
    <div className="gallery">
      <h2>Galería de Imágenes</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Galería ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
