import PropTypes from 'prop-types';
import styled from 'styled-components';
import BotonesGeneral from '../BotonesGenerales';
import CardGeneral from './CardGeneral';
import Cargando from '../Cargando';

const ContainerContenidoPrincipal = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ContainerCategoria = styled.div`
    margin-bottom: 40px;
`;

const ContainerCardContenidoPrincipal = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center; /* Centrar las tarjetas en pantallas pequeñas */
    }
`;

const ContenidoPrincipal = (props) => {
    const { valorCategorias } = props;

    // Filtrar las categorías únicas
    const categoriasUnicas = [...new Set(valorCategorias.map((categoria) => categoria.categoria))];

    // Mostrar componente Cargando si no hay categorías
    if (valorCategorias.length === 0) {
        return <Cargando />;
    }

    return (
        <ContainerContenidoPrincipal>
            {categoriasUnicas.map((categoria) => (
                <ContainerCategoria key={categoria}>
                    <BotonesGeneral texto={categoria} />
                    <ContainerCardContenidoPrincipal>
                        {valorCategorias
                            .filter((item) => item.categoria === categoria)
                            .map((categoriaItem) => (
                                <CardGeneral
                                    key={categoriaItem.id}
                                    category={categoriaItem.categoria}
                                    image={categoriaItem.imagen}
                                    title={categoriaItem.titulo}
                                    onDelete={props.setEliminar}
                                    id={categoriaItem.id}
                                    video={categoriaItem.video}
                                    onEdit={props.setEditar}
                                />
                            ))}
                    </ContainerCardContenidoPrincipal>
                </ContainerCategoria>
            ))}
        </ContainerContenidoPrincipal>
    );
};

ContenidoPrincipal.propTypes = {
    valorCategorias: PropTypes.array.isRequired,
    setValorCategoria: PropTypes.func,
    setEliminar: PropTypes.func,
    setEditar: PropTypes.func,
};

export default ContenidoPrincipal;
