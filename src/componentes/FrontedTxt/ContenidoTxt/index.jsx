import styled from "styled-components";

const ContenedorTxtCss = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px; /* Ajustamos el padding para pantallas más pequeñas */
  }
`;

export const Titulo = styled.h2`
  width: ${(props) => props.width || "332.92px"};
  height: ${(props) => props.height || "54px"};
  color: ${(props) => props.color || "#F5F5F5"};
  font-family: Roboto;
  font-size: ${(props) => props.fontSize || "46px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || "53.91px"};
  text-align: ${(props) => props.textAlign || "left"};
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media (max-width: 768px) {
    font-size: 32px; /* Reducir tamaño de fuente en pantallas más pequeñas */
    width: 100%; /* Hacer que el título ocupe todo el ancho disponible */
    text-align: center; /* Centrar el título en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 24px; /* Reducir aún más en pantallas extra pequeñas */
  }
`;

export const Parrafo = styled.p`
  width: ${(props) => props.width || "662.84px"};
  height: ${(props) => props.height || "110px"};
  opacity: ${(props) => props.opacity || "1"};
  font-family: Roboto;
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || "300"};
  color: ${(props) => props.color || "#F5F5F5"};
  line-height: ${(props) => props.lineHeight || "21.09px"};
  text-align: ${(props) => props.textAlign || "left"};
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media (max-width: 768px) {
    font-size: 16px; /* Reducir tamaño de fuente en pantallas más pequeñas */
    width: 100%; /* Hacer que el párrafo ocupe todo el ancho disponible */
    text-align: center; /* Centrar el párrafo en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Reducir aún más en pantallas extra pequeñas */
    line-height: 18px; /* Ajustar line-height */
  }
`;

const ContenidoTxt = () => {
  return (
    <ContenedorTxtCss>
      <Titulo>Challenge React</Titulo>
      <Parrafo>
        Este challenge es una forma de aprendizaje. Es un mecanismo donde
        podrás comprometerte en la resolución de un problema para poder aplicar
        todos los conocimientos adquiridos en la formación React.
      </Parrafo>
    </ContenedorTxtCss>
  );
};

export default ContenidoTxt;
