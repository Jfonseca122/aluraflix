import styled from "styled-components";
import Boton from "../Boton";
import CampoTXT from "./CampoTxt";
import { useState } from "react";
import CampoTextarea from "./CampoTxtArea";
import InputCategoria from "./InputCategoria";
import PropTypes from 'prop-types';

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 8px;
  @media (max-width: 768px) {
    padding: 10px; /* Reducir el padding en pantallas pequeñas */
  }
`;

const ContainerCampoTxt = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column; /* Apilar los campos en pantallas pequeñas */
    gap: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const ContainerTextarea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;

  textarea {
    background-color: transparent;
    width: 573px;
    height: 220px;
    gap: 0px;
    border-radius: 15px 0px 0px 0px;
    border: 3px 0px 0px 0px;
    opacity: 0px;
    @media (max-width: 768px) {
      width: 100%; /* Hacer que el textarea ocupe todo el ancho disponible */
      height: 150px; /* Reducir la altura en pantallas pequeñas */
    }
  }
`;

const ContainerBotones = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column; /* Apilar los botones en pantallas pequeñas */
    gap: 10px;
  }
`;

const FormularioTarjeta = (props) => {
  const [Titulo, setTitulo] = useState('');
  const [Categoria, setCategoria] = useState('');
  const [Imagen, setImagen] = useState('');
  const [Video, setVideo] = useState('');
  const [Descripcion, setDescripcion] = useState('');

  const AccionBtn = (event) => {
    event.preventDefault();

    let DatosEnviar = {
      titulo: Titulo,
      categoria: Categoria,
      imagen: Imagen,
      video: Video,
      descripcion: Descripcion,
    };

    props.AgregarTarjeta(DatosEnviar);
  };

  const LimpiarCampos = () => {
    setTitulo('');
    setCategoria('');
    setImagen('');
    setVideo('');
    setDescripcion('');
  };

  return (
    <Formulario onSubmit={AccionBtn}>
      <ContainerCampoTxt>
        <div>
          <CampoTXT titulo="Titulo" required valor={Titulo} setValor={setTitulo}></CampoTXT>
        </div>
        <div>
          <InputCategoria valor={Categoria} setvalor={setCategoria} required></InputCategoria>
        </div>
      </ContainerCampoTxt>
      <ContainerCampoTxt>
        <div>
          <CampoTXT titulo="Imagen" tipo={'url'} required valor={Imagen} setValor={setImagen}></CampoTXT>
        </div>
        <div>
          <CampoTXT titulo="Video" tipo={'url'} required valor={Video} setValor={setVideo}></CampoTXT>
        </div>
      </ContainerCampoTxt>
      <ContainerTextarea>
        <CampoTextarea titulo="Descripcion" required valor={Descripcion} setValor={setDescripcion}></CampoTextarea>
      </ContainerTextarea>
      <ContainerBotones>
        <Boton activo Texto="Guardar" tipo={'submit'}></Boton>
        <Boton activo={false} Texto="Limpiar" tipo={'button'} onClick={LimpiarCampos}></Boton>
      </ContainerBotones>
    </Formulario>
  );
};

FormularioTarjeta.propTypes = {
  AgregarTarjeta: PropTypes.func,
};

export default FormularioTarjeta;
