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
    color: white; /* Aseguramos que el label tenga color blanco */
  }

  select {
    width: 470px;
    height: 62px;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid #ccc;
    background-color: transparent;
    color: white;
    font-size: 16px;
    appearance: none; /* Para quitar el estilo predeterminado de los navegadores */

    &:focus {
      border-color: #4a90e2; /* Cambio de color al hacer focus */
      outline: none;
    }

    /* Responsividad */
    @media (max-width: 768px) {
      width: 100%;  /* El select ocupará el 100% del contenedor en pantallas pequeñas */
      height: 50px;
    }
  }
  
  option {
    background-color: transparent;
    color: black; /* Aseguramos que las opciones sean legibles */
  }
`;

const InputCategoria = (props) => {
  const manejarCambio = (e) => {
    props.setvalor(e.target.value);
  };

  const opcionesEstaticas = ['Frontend', 'Backend', 'Full Stack'];

  return (
    <ContenerdorCampo>
      <label htmlFor="categoria">Categoria</label>
      <select id="categoria" required={props.required} value={props.valor} onChange={manejarCambio}>
        <option value="" disabled hidden>Seleccionar</option>
        {opcionesEstaticas.map((opcion, index) => (
          <option key={index} value={opcion}>{opcion}</option>
        ))}
      </select>
    </ContenerdorCampo>
  );
};

InputCategoria.propTypes = {
  valor: PropTypes.string,
  setvalor: PropTypes.func,
  required: PropTypes.bool.isRequired,
};

export default InputCategoria;
