import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  background: ${(props) => (props.$activo ? "#000000E5" : "transparent")};
  width: 180px;
  height: 54px;
  color: ${(props) => (props.$activo ? "#2271D1" : "#FFFFFF")};
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: ${(props) => (props.$activo ? "400" : "600")};
  padding: 10px 20px;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${(props) => (props.$activo ? "#2271D1" : "#FFFFFF")};
  box-shadow: ${(props) => (props.$activo ? "0px 0px 12px 4px #2271D1 inset" : "none")};

  &:hover {
    background-color: #1C2E4A;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: ${(props) => (props.$activo ? "0px 0px 6px 2px #2271D1 inset" : "none")};
  }

  /* Responsividad */
  @media (max-width: 768px) {
    width: 150px;
    font-size: 16px;
  }
`;

const Boton = ({ Texto, activo, ruta, onClick, tipo = "button" }) => {
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    if (ruta) {
      navigate(ruta); // Redirige si se pasa una ruta
    }
    if (onClick) {
      onClick(e); // Llama a la función onClick si se pasa
    }
  };

  return <StyledButton type={tipo} onClick={handleRedirect} $activo={activo}>{Texto}</StyledButton>;
};

Boton.propTypes = {
  Texto: PropTypes.string.isRequired,
  activo: PropTypes.bool,
  ruta: PropTypes.string,
  onClick: PropTypes.func,
  tipo: PropTypes.string,
};

export default Boton;
