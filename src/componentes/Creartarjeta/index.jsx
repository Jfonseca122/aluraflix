import styled from "styled-components";

const CrearTarjetaTxtCss = styled.div`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 20px; /* Centra el contenedor dentro de su padre */
  text-align: left;

  hr {
    width: 100%;
    margin: 0 auto;
    border: 1px solid white;
  }

  p {
    margin: 1rem 0;
    font-family: Source Sans Pro;
    font-size: 36px;
    font-weight: 600;
    line-height: 24px;

    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  @media (max-width: 768px) {
    max-width: 90%; /* Aumentamos el ancho en pantallas pequeñas */
    margin-top: 10px; /* Reducimos el margen superior en pantallas pequeñas */

    p {
      font-size: 24px; /* Reducimos el tamaño de la fuente en pantallas pequeñas */
      line-height: 20px; /* Ajustamos el interlineado */
    }

    hr {
      border: 0.5px solid white; /* Hacemos la línea más delgada en pantallas pequeñas */
    }
  }
`;

const CrearTarjeta = () => {
  return (
    <CrearTarjetaTxtCss>
      <hr />
      <p>Crear Tarjeta</p>
      <hr />
    </CrearTarjetaTxtCss>
  );
};

export default CrearTarjeta;
