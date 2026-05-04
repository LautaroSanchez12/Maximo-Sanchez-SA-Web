import products from '../data/products'

function Products() {
  const handleWhatsAppProduct = (productName) => {
    const message = `Hola, buenas. Quisiera consultar por el producto: ${productName}`
    const encodedMessage = encodeURIComponent(message)

    window.open(
      `https://wa.me/5492612199066?text=${encodedMessage}`,
      '_blank'
    )
  }

  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2 className="products-title">Nuestros productos</h2>
        <p className="products-subtitle">
          Conocé algunas de nuestras opciones de sal para industrias, comercios y hogares.
        </p>

        <div className="products-list">
          {products.map((product) => (
            <article className="product-item" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>

              <div className="product-action">
                <button
                  type="button"
                  className="product-plus"
                  onClick={() => handleWhatsAppProduct(product.name)}
                  aria-label={`Consultar por ${product.name}`}
                >
                  +
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products