import styled from "styled-components";
import FrontedTxt from "../componentes/FrontedTxt";
import ImagenEstatica from "../componentes/ImagenEstatica/imagenEstatica";
import ContenidoPrincipal from "../componentes/ContenedorPrincipal";
import PropTypes from 'prop-types';

const SectionBannerCss = styled.section`
  height: 732px; /* Altura total del banner */
  opacity: 70%;
  background-size: cover;
  background-position-y: -100px; /* Desplaza la imagen hacia arriba */
  background-repeat: no-repeat;
  background-image: url('img/fondo.png');
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; /* Mantiene el contenedor centrado verticalmente */
  position: relative; /* Asegura que los elementos hijos estén posicionados correctamente */

  @media (max-width: 768px) {
    height: 400px; /* Reducimos la altura en pantallas pequeñas */
    background-position-y: center; /* Alineamos la imagen al centro */
    display: none; /* Ocultamos la sección del banner en pantallas pequeñas */
  }
`;

const ContainerCardCss = styled.div`
  width: 100%; /* Ocupa todo el ancho disponible */
  max-width: 1300px; /* Limita el ancho máximo */
  padding: 20px; /* Espaciado interno */
  display: flex;
  justify-content: space-between; /* Espacia los elementos dentro del contenedor */
  align-items: center; /* Centra verticalmente los elementos internos */
  opacity: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Apilamos los elementos en pantallas pequeñas */
    align-items: flex-start; /* Alineamos a la izquierda */
    padding: 10px; /* Reducimos el padding */
  }
`;

const Home = props => {
  return (
    <>
      <SectionBannerCss>
        <ContainerCardCss>
          <FrontedTxt />
          <ImagenEstatica />
        </ContainerCardCss>
      </SectionBannerCss>

      <ContenidoPrincipal 
        valorCategorias={props.valorCategoria}
        setValorCategoria={props.setValorCategoria}
        setEliminar={props.setEliminar}
        setEditar={props.setEditar}
      />
    </>
  );
};

Home.propTypes = {
  valorCategoria: PropTypes.array,
  setValorCategoria: PropTypes.func,
  setEliminar: PropTypes.func,
  setEditar: PropTypes.func
};

export default Home;
