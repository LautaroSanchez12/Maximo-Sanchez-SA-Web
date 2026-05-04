function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Maximo Sanchez SA</h3>
          <p>
            Empresa familiar de Mendoza especializada en la venta de sal para
            industrias, comercios y hogares.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p><strong>Dirección:</strong> Alsina 1696, Godoy Cruz</p>
          <p><strong>Horario:</strong> 8:30 a 12:30 y 15:00 a 18:00</p>
          <p><strong>Teléfono:</strong> A confirmar</p>
          <p><strong>WhatsApp:</strong> +54 9 261 219 9066</p>
        </div>

        <div className="footer-section">
          <h4>Navegación</h4>
          <nav className="footer-nav">
            <a href="#about">Nosotros</a>
            <a href="#products">Productos</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Servicios</h4>
          <p>Venta de sal para industrias</p>
          <p>Distribución para comercios</p>
          <p>Productos para hogares</p>
          <p>Pedidos a granel</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Maximo Sanchez SA. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer