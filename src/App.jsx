import styled from "styled-components";
import Cabezera from "./componentes/Cabezera";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import PageNotFound from "./pages/PageNoFound";
import EditarModal from "./componentes/EditarCategoria/index.jsx";
import Footer from "./componentes/Footer/index.jsx";

const FondoGlobal = styled.div`
  background: var(--Dark-Grey, #262626);
  width: 100%;
  min-height: 100vh;
`;

function App() {
  const [estadoBoton, setEstadoBoton] = useState("Home");
  const [Categorias, setCategorias] = useState([]);
  const [tarjetaEditar, setTarjetaEditar] = useState(null);

  const EliminarCard = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://6789d423dd587da7ac27bfc3.mockapi.io/categorias/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const CardRestante = Categorias.filter((Categoria) => Categoria.id !== id);
            setCategorias(CardRestante);
            Swal.fire("¡Eliminado!", "La tarjeta ha sido eliminada del servidor.", "success");
          })
          .catch((error) => {
            console.error("Error al eliminar la tarjeta del servidor:", error.message);
            Swal.fire({
              title: "Error",
              text: "No se pudo eliminar la tarjeta. Inténtalo de nuevo más tarde.",
              icon: "error",
              confirmButtonText: "Aceptar",
            });
          });
      }
    });
  };

  const EditarCard = (id) => {
    const tarjetaSeleccionada = Categorias.find((categoria) => categoria.id === id);
    setTarjetaEditar(tarjetaSeleccionada);
  };

  const GuardarEdicion = (datosActualizados) => {
    fetch(`https://6789d423dd587da7ac27bfc3.mockapi.io/categorias/${datosActualizados.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const categoriasActualizadas = Categorias.map((categoria) =>
          categoria.id === data.id ? data : categoria
        );
        setCategorias(categoriasActualizadas);
        Swal.fire({
          title: "¡Éxito!",
          text: "La tarjeta se ha actualizado correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      })
      .catch((error) => {
        console.error("Error al actualizar los datos:", error.message);
        Swal.fire({
          title: "Error",
          text: "No se pudo actualizar la tarjeta. Inténtalo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const respuesta = await fetch("https://6789d423dd587da7ac27bfc3.mockapi.io/categorias");
        if (!respuesta.ok) {
          throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        setCategorias([...datos]);
      } catch (error) {
        console.error("Error al obtener datos del servidor:", error.message);
        Swal.fire({
          title: "Error al cargar categorías",
          text: "No se pudo conectar con el servidor. Por favor, inténtalo más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    };

    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  const AgregarTarjeta = (datos) => {
    fetch("https://6789d423dd587da7ac27bfc3.mockapi.io/categorias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCategorias((prevCategorias) => [...prevCategorias, data]);
        Swal.fire({
          title: "¡Éxito!",
          text: "La tarjeta se ha agregado correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error.message);
        Swal.fire({
          title: "Error",
          text: "No se pudo agregar la tarjeta. Inténtalo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      });
  };

  return (
    <Router>
      <FondoGlobal>
        <Cabezera setEstadoBoton={setEstadoBoton} valorBoton={estadoBoton} />
        <Routes>
          <Route
            path="/"
            element={<Home valorCategoria={Categorias} setValorCategoria={setCategorias} setEliminar={EliminarCard} setEditar={EditarCard} />}
          />
          <Route
            path="/nuevoVideo"
            element={<NuevoVideo AgregarTarjeta={AgregarTarjeta} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <EditarModal
          tarjeta={tarjetaEditar}
          isOpen={!!tarjetaEditar}
          onClose={() => setTarjetaEditar(null)}
          onSave={GuardarEdicion}
        />
        <Footer></Footer>
      </FondoGlobal>
    </Router>
  );
}

export default App;
