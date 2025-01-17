import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContenerdorTextarea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;

  label {
    font-family: Source Sans Pro;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  textarea {
    background-color: transparent;
    width: 573px;
    height: 220px;
    gap: 0px;
    border-radius: 15px 0px 0px 0px;
    border: 3px 0px 0px 0px;
    opacity: 0px;
    color: white;
  }
`;

const CampoTextarea = (props) => {
    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    };

    const idCampo = props.titulo.toLowerCase().replace(/ /g, '-'); // Crear un id único basado en el título

    return (
        <ContenerdorTextarea>
            <label htmlFor={idCampo}>{props.titulo}</label>
            <textarea
                id={idCampo}
                placeholder={props.placeholder || `Ingresar ${props.titulo.toLowerCase()}`}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
            ></textarea>
        </ContenerdorTextarea>
    );
};

CampoTextarea.propTypes = {
    titulo: PropTypes.string.isRequired,  // Título del campo (obligatorio)
    placeholder: PropTypes.string,        // Placeholder opcional
    required: PropTypes.bool.isRequired,  // Si el campo es obligatorio (obligatorio)
    valor: PropTypes.string,
    setValor: PropTypes.func
};

export default CampoTextarea;
