import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; 
import './index.css'

const EditarModal = ({ tarjeta, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: "",  // Añadir el id al estado
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  });

  useEffect(() => {
    if (tarjeta) {
      setFormData({
        id: tarjeta.id || "",  // Asegurarse de que el id esté incluido
        titulo: tarjeta.titulo || "",
        categoria: tarjeta.categoria || "",
        imagen: tarjeta.imagen || "",
        video: tarjeta.video || "",
        descripcion: tarjeta.descripcion || "",
      });
    }
  }, [tarjeta]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);  // El id también se incluye aquí sin necesidad de mostrarlo
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Editar Tarjeta</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Categoría:</label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full Stack">Full Stack</option>
            </select>
          </div>
          <div>
            <label>URL Imagen:</label>
            <input
              type="url"
              name="imagen"
              value={formData.imagen}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>URL Video:</label>
            <input
              type="url"
              name="video"
              value={formData.video}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

// Definición de los tipos de las propiedades del componente
EditarModal.propTypes = {
  tarjeta: PropTypes.shape({
    id: PropTypes.string,  // Definir el tipo de id
    titulo: PropTypes.string,
    categoria: PropTypes.string,
    imagen: PropTypes.string,
    video: PropTypes.string,
    descripcion: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditarModal;
