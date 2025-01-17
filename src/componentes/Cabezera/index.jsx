import PropTypes from "prop-types";
import styled from 'styled-components';
import Boton from '../Boton';

const HeaderCss = styled.header`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid var(--Blue, #2271D1);
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }
`;

const ContBotonCss = styled.div`
    display: flex;
    gap: 30px;
    
    @media (max-width: 768px) {
        gap: 15px;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 100%;
    }
`;

const ImgCss = styled.img`
    width: 168px;
    height: 48px;

    @media (max-width: 768px) {
        width: 140px;
        height: 40px;
    }
`;

const Cabezera = ({ setEstadoBoton, valorBoton }) => {
    const handleButtonClick = (buttonName) => {
        setEstadoBoton(buttonName); // Actualiza el estado del botón activo
    };

    return (
        <HeaderCss>
            <ImgCss src="img/Logo.svg" alt="Logo de AluraFlix" />
            <ContBotonCss>
                <Boton
                    Texto="Home"
                    activo={valorBoton === "Home"} // Verifica si está activo
                    ruta="/"
                    onClick={ () => handleButtonClick("Home")} // Cambiar estado al clic
                />
                <Boton
                    Texto="Nuevo Video"
                    activo={valorBoton === "Nuevo Video"} // Verifica si está activo
                    ruta="/nuevoVideo"
                    onClick={() => handleButtonClick("Nuevo Video")} // Cambiar estado al clic
                />
            </ContBotonCss>
        </HeaderCss>
    );
};

Cabezera.propTypes = {
  setEstadoBoton: PropTypes.func,
  valorBoton: PropTypes.string,
};

export default Cabezera;
