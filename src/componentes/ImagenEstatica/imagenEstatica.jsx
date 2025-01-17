import styled from "styled-components";

const ImagenEstaticaCss = styled.img`
  width: 100%;
  max-width: 600px; /* Limita el ancho máximo de la imagen */
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 15px 0px 0px 0px;
  border: 5px solid transparent; /* Solo el borde superior */
  opacity: 1;

  @media (max-width: 768px) {
    width: 80%; /* La imagen ocupará el 80% del ancho disponible */
    max-width: none; /* Quitamos el max-width */
  }
`;

const ImagenEstatica = () => {
  return (
    <div>
      <ImagenEstaticaCss src="img/player.png" alt="Imagen de frontend" />
    </div>
  );
};

export default ImagenEstatica;
