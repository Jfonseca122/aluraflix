import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContenerdorCampo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-family: Source Sans Pro, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #fff; /* Aseguramos que el label tenga color blanco */
  }

  input {
    width: 470px;
    height: 62px;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid #ccc;
    background-color: transparent;
    color: white;
    font-size: 16px;

    /* Para mejorar la visibilidad */
    &:focus {
      border-color: #4a90e2;
      outline: none;
    }

    /* Responsividad para pantallas pequeñas */
    @media (max-width: 768px) {
      width: 100%;  /* Los campos ocuparán todo el ancho disponible */
      height: 50px;
    }
  }
`;

const CampoTXT = (props) => {
  const tipoInput = 'text';
  const valorInput = props.tipo ? props.tipo : tipoInput;

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  const idCampo = props.titulo.toLowerCase().replace(/ /g, '-'); // Crear un id único basado en el título

  return (
    <ContenerdorCampo>
      <label htmlFor={idCampo}>{props.titulo}</label>
      <input
        id={idCampo}
        type={valorInput} // Verificar si `tipo` está definido, de lo contrario usar 'text'
        placeholder={props.placeholder || `Ingresar ${props.titulo.toLowerCase()}`}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </ContenerdorCampo>
  );
};

CampoTXT.propTypes = {
  titulo: PropTypes.string.isRequired,  // Título del campo (obligatorio)
  placeholder: PropTypes.string,        // Placeholder opcional
  required: PropTypes.bool.isRequired,  // Si el campo es obligatorio (obligatorio)
  valor: PropTypes.string,
  tipo: PropTypes.string,
  setValor: PropTypes.func,
};

export default CampoTXT;
