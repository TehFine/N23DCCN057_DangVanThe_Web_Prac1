async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  return res.json()
}

export default async function ProductDetail({ params }) {

  const { id } = await params

  const product = await getProduct(id)

  return (
     <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Back Button */}
      <a
        href="/"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to products
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Product Image */}
        <div className="bg-white p-6 rounded-xl shadow">

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-72 md:h-96 object-contain"
          />

        </div>

        {/* Product Info */}
        <div>

          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-500 mb-4">
            Category: {product.category}
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-green-600 mb-6">
            ${product.price}
          </p>

          <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  )
}