import PropTypes from 'prop-types'; // Importar prop-types
import './CardGeneral.css'; // Archivo para los estilos

const CardGeneral = ({ category, image, title, onEdit, onDelete, id, video }) => {
  // Definir el color del borde según la categoría
  let borderColor;
  if (category === 'Frontend') borderColor = 'lightblue';
  else if (category === 'Backend') borderColor = 'green';
  else if (category === 'Full Stack') borderColor = '#FFD700';
  else borderColor = 'gray'; // Color predeterminado para categorías no reconocidas

  return (
    <div className="card-general" style={{ borderColor }}>
      <a href={video} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="card-image" />
      </a>
      <h3 className="card-title">{title}</h3>
      <div className="card-actions">
        <button className="card-button delete-button" onClick={ ()=> onDelete(id)}>
          BORRAR
        </button>
        <button className="card-button edit-button" onClick={()=> onEdit(id)}>
          EDITAR
        </button>
      </div>
    </div>
  );
};

// Validación de props con PropTypes
CardGeneral.propTypes = {
  category: PropTypes.string, 
  image: PropTypes.string, // URL de la imagen, obligatorio
  title: PropTypes.string, // Título del card, obligatorio
  onEdit: PropTypes.func, // Función para editar, obligatorio
  onDelete: PropTypes.func,
  id: PropTypes.string,
  video: PropTypes.string  // URL del video, obligatorio
};

export default CardGeneral;
