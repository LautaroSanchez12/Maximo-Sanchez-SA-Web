function Contact() {
    const handleContactWhatsAppClick = () => {
        const message =
            'Hola, buenas. Quisiera hacer una consulta sobre sus productos de sal y formas de entrega.'

        const encodedMessage = encodeURIComponent(message)

        window.open(
            `https://wa.me/5492612199066?text=${encodedMessage}`,
            '_blank'
        )
    }

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="contact-title">Contacto</h2>
                    <p className="contact-subtitle">
                        Pedinos información, productos o presupuesto. Estamos para ayudarte.
                    </p>

                    <div className="contact-details">
                        <p><strong>Dirección:</strong> Alsina 1696, Godoy Cruz</p>
                        <p><strong>Horario:</strong> 8:30 a 12:30 y 15:00 a 18:00</p>
                        <p><strong>Teléfono:</strong> A confirmar</p>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleContactWhatsAppClick}
                    >
                        Escribir por WhatsApp
                    </button>
                </div>

                <div className="contact-form-wrapper">
                    <form
                        className="contact-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            alert('Gracias por tu consulta, te vamos a responder pronto')
                        }}
                    >
                        <input type="text" placeholder="Nombre" />
                        <input type="email" placeholder="Correo electrónico" />
                        <input type="text" placeholder="Teléfono" />
                        <textarea placeholder="Escribí tu consulta" rows="5"></textarea>
                        <button type="submit" className="btn btn-secondary">
                            Enviar consulta
                        </button>
                    </form>
                </div>
            </div>

            <div className="map-wrapper">
                <iframe
                    title="Ubicación de Maximo Sanchez SA"
                    src="https://www.google.com/maps?q=Alsina%201696%20Godoy%20Cruz&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}

export default Contact