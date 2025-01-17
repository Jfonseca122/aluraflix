

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'trasparent',
    padding: '20px',
    textAlign: 'center',
  };

  const footerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const footerImageStyle = {
    maxWidth: '100px', // Ajusta el tamaño de la imagen según sea necesario
    marginBottom: '10px',
  };

  const footerTextStyle = {
    fontSize: '14px',
    color: 'white',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <img src="img/Logo.svg" alt="Logo" style={footerImageStyle} />
        <p style={footerTextStyle}>Elaborado por Julián Fonseca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
