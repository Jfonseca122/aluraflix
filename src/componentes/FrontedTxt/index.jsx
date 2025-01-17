import styled from "styled-components";
import ContenidoTxt from "./ContenidoTxt";

const ConetedorFrontedCss = styled.div``;

// Botón estilizado con propiedades dinámicas
const FrontedBoton = styled.button`
  width: ${(props) => props.width || "296.82px"};
  height: ${(props) => props.height || "92px"};
  border-radius: ${(props) => props.borderRadius || "15px 0px 0px 0px"};
  background: ${(props) => props.background || "#6BD1FF"};
  color: ${(props) => props.color || "#F5F5F5"};
  font-family: Roboto;
  font-size: ${(props) => props.fontSize || "48px"};
  font-weight: 800;
  line-height: 56.25px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 80%; /* El botón ocupará el 80% del ancho disponible */
    font-size: 32px; /* Reducimos el tamaño de la fuente */
    height: 70px; /* Ajustamos la altura */
  }
`;

const FrontedTxt = () => {
  return (
    <ConetedorFrontedCss>
      {/* Botón con valores por defecto */}
      <FrontedBoton>Front End</FrontedBoton>

      <ContenidoTxt />
    </ConetedorFrontedCss>
  );
};

export default FrontedTxt;
