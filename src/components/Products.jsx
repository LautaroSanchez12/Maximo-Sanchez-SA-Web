function Products() {
  const products = [
    {
      id: 1,
      name: 'Sal Gruesa Lavada Seca Lisal x 25Kg.',
      image: '/products/sal-gruesa-lavada-seca-lisal-25kg.jpg',
    },
    {
      id: 2,
      name: 'Sal Entrefina Lavada Seca Lisal x 25Kg.',
      image: '/products/sal-entrefina-lavada-seca-lisal-25kg.jpg',
    },
    {
      id: 3,
      name: 'Sal Fina Lavada Seca Lisal x 25Kg.',
      image: '/products/sal-fina-lavada-seca-lisal-25kg.jpg',
    },
    {
      id: 4,
      name: 'Sal Entrefina Común Lisal x 25Kg.',
      image: '/products/sal-entrefina-comun-lisal-25kg.jpg',
    },
    {
      id: 5,
      name: 'Sal Gruesa Común Lisal x 25Kg.',
      image: '/products/sal-gruesa-comun-lisal-25kg.jpg',
    },
    {
      id: 6,
      name: 'Sal Fina Lavada Seca Diamante x 25Kg.',
      image: '/products/sal-fina-lavada-seca-diamante-25kg.jpg',
    },
    {
      id: 7,
      name: 'Sal Gruesa Lavada Diamante x 25Kg.',
      image: '/products/sal-gruesa-lavada-diamante-25kg.jpg',
    },
    {
      id: 8,
      name: 'Sal Entrefina Lavada Seca Diamante x 25Kg.',
      image: '/products/sal-entrefina-lavada-seca-diamante-25kg.jpg',
    },
    {
      id: 9,
      name: 'Sal Gruesa Común Diamante x 50Kg.',
      image: '/products/sal-gruesa-comun-diamante-50kg.jpg',
    },
    {
      id: 10,
      name: 'Sal a Granel',
      image: '/products/sal-a-granel.jpg',
    },
  ]

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
              </div>

              <div className="product-action">
                <button
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