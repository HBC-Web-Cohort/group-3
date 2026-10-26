
function ProductCard({ product, onAddToOrder }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Product Image */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-slate-100 p-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {product.category}
        </p>

        <p className="mt-3 text-xl font-bold text-slate-900">
          ${product.price.toFixed(2)}
        </p>

        <button
          type="button"
          onClick={() => onAddToOrder(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Add to Order
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
