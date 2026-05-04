function Hero() {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5492612199066?text=Hola%20buenas!%20Estoy%20interesado%20en%20sus%20productos%20de%20sal.%20%C2%BFPodr%C3%ADan%20pasarme%20informaci%C3%B3n%20y%20precios?',
      '_blank'
    )
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Venta de sal en Mendoza</h1>
        <p className="hero-subtitle">Distribuimos sal para industrias, comercios y hogares</p>

        <div className="hero-buttons">
          <a className="btn btn-secondary" href="#products">
            Ver productos
          </a>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleWhatsAppClick}
            aria-label="Contactar por WhatsApp"
          >
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero