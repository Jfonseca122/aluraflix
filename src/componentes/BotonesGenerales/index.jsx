import PropTypes from 'prop-types';
import styled from 'styled-components';

const BotonesGeneralCss = styled.button`
  width: 432px;
  height: 70px;
  gap: 0px;
  border-radius: 15px 0px 0px 0px;
  opacity: 1;
  background: ${(props) => {
    switch (props.texto) {
      case 'Frontend':
        return '#6BD1FF'; // Azul
      case 'Backend':
        return '#78C800'; // Verde
      case 'Full Stack':
        return '#FFD700'; // Amarillo
      default:
        return 'var(--FrontEnd, #6BD1FF)'; // Color por defecto
    }
  }};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 800;
  line-height: 37.5px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #F5F5F5;
  border: none;

  /* Ajustes responsivos */
  @media (max-width: 768px) {
    width: 100%; /* El botón ocupa el 100% del ancho en pantallas pequeñas */
    font-size: 24px; /* Reducimos el tamaño de la fuente */
    height: 60px; /* Reducimos la altura */
  }

  @media (max-width: 480px) {
    font-size: 20px; /* Tamaño de fuente más pequeño en pantallas extra pequeñas */
    height: 50px; /* Reducimos aún más la altura */
  }
`;

const BotonesGeneral = ({ texto }) => {
  return (
    <BotonesGeneralCss texto={texto}>
      {texto}
    </BotonesGeneralCss>
  );
};

BotonesGeneral.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default BotonesGeneral;
