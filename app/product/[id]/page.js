async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  return res.json()
}

export default async function ProductDetail({ params }) {

  const { id } = await params

  const product = await getProduct(id)

  return (
    <div className="p-10 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />

        <div>

          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-500 mb-4">
            {product.category}
          </p>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-green-600 mb-6">
            ${product.price}
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  )
}