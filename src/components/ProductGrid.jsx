
import ProductCard from "./ProductCard";

function ProductGrid({ products, onAddToOrder }) {
  return (
    <section className="flex-1">
      {/* Section Heading */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Featured products
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Find the right gear for your sport.
          </p>
        </div>

        <span className="whitespace-nowrap rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
          {products.length} items
        </span>
      </div>

      {/* Responsive Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToOrder={onAddToOrder}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h3 className="text-lg font-semibold text-slate-800">
            No products found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try selecting another category.
          </p>
        </div>
      )}
    </section>
  );
}

export default ProductGrid;
