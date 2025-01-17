import styled from "styled-components";
import FormularioTarjeta from "../FormularioTarjeta";
import CrearTarjeta from "../Creartarjeta";
import PropTypes from 'prop-types';

const Contenedor = styled.div`
  padding: 20px 0;
  text-align: center;
  color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 10px 0; /* Reducimos el padding en pantallas pequeñas */
  }
`;

const Titulo = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 60px;
  font-weight: 900;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px; /* Reducimos el tamaño del título en pantallas pequeñas */
  }
`;

const Subtitulo = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin: 8px 0 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px; /* Reducimos el tamaño del subtítulo */
  }
`;

const SeccionFormularioCss = styled.section`
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 90%; /* Aumentamos el ancho del formulario en pantallas pequeñas */
  }
`;

const CompoNuevoVideo = (props) => {
  return (
    <Contenedor>
      <Titulo>NUEVO VIDEO</Titulo>
      <Subtitulo>Complete el formulario para crear una nueva tarjeta de video</Subtitulo>
      <CrearTarjeta />
      <SeccionFormularioCss>
        <FormularioTarjeta AgregarTarjeta={props.AgregarTarjeta} />
      </SeccionFormularioCss>
    </Contenedor>
  );
};

CompoNuevoVideo.propTypes = {
  AgregarTarjeta: PropTypes.func,
};

export default CompoNuevoVideo;
