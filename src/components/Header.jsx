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
      <div className="header-container">
        <div className="header-left">
          <h2 className="logo">Maximo Sanchez SA</h2>
        </div>

        <div className="header-center">
          <nav className="nav">
            <a href="#products">Productos</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>

        <div className="header-right">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleHeaderWhatsAppClick}
            aria-label="Enviar mensaje por WhatsApp"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header