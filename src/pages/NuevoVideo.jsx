import ContenidoVideo from "../componentes/NuevoVideo"
import PropTypes from 'prop-types';
const NuevoVideo = (props) => {
  return (
    <ContenidoVideo AgregarTarjeta={props.AgregarTarjeta}></ContenidoVideo>
  )
}

NuevoVideo.propTypes = {
  AgregarTarjeta: PropTypes.func,
};
export default NuevoVideo