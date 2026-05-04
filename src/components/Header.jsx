const handleHeaderWhatsAppClick = () => {
  const message =
    'Hola, buenas. Quisiera recibir información sobre sus productos de sal.'

  const encodedMessage = encodeURIComponent(message)

  window.open(
    `https://wa.me/5492612199066?text=${encodedMessage}`,
    '_blank'
  )
}

function Header() {
  return (
    <header className="header">
      <div className="header-container header-container--compact">
        <h2 className="logo">Maximo Sanchez SA</h2>

        <nav className="nav nav--compact">
          <a href="#about">Nosotros</a>
          <a href="#products">Productos</a>
          <a href="#contact">Contacto</a>
        </nav>

        <button
          type="button"
          className="btn btn-primary btn-small"
          onClick={handleHeaderWhatsAppClick}
          aria-label="Enviar mensaje por WhatsApp"
        >
          WhatsApp
        </button>
      </div>
    </header>
  )
}

export default Header