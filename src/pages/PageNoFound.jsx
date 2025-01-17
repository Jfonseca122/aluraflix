
import styled from "styled-components";

// Estilos usando styled-components
const PageContainer = styled.div`
  text-align: center;
  padding: 50px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  color: #ff6b6b;
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 24px;
  margin: 20px 0;
`;

const BackHomeLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: #4caf50;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const PageNotFound = () => {
  return (
    <PageContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Oops! La página que buscas no existe.</ErrorMessage>
      <BackHomeLink href="/">Volver al inicio</BackHomeLink>
    </PageContainer>
  );
};

export default PageNotFound;
