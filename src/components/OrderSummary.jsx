
function OrderSummary({ order, onUpdateQuantity, onRemoveProduct }) {
  // Calculate the total price of all products.
  const totalPrice = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-slate-900">
        Your order
      </h2>

      {/* Empty Order Message */}
      {order.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-slate-500">Your order is empty.</p>
          <p className="mt-2 text-sm text-slate-400">
            Add products to get started.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Products */}
          <div className="space-y-4">
            {order.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-slate-800">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    ${item.price.toFixed(2)} each
                  </p>

                  {/* Quantity Controls */}
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease ${item.name} quantity`}
                      className="h-8 w-8 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="min-w-4 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                      className="h-8 w-8 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Item Total and Remove Button */}
                <div className="shrink-0 text-right">
                  <p className="font-bold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() => onRemoveProduct(item.id)}
                    className="mt-2 text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-base font-semibold text-slate-700">
              Total
            </span>

            <span className="text-2xl font-bold text-orange-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </section>
  );
}

export default OrderSummary;
