
import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import products from "./data/products";
import OrderSummary from "./components/OrderSummary";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [order, setOrder] = useState([]);

  function handleAddToOrder(product) {
  setOrder((currentOrder) => {
    const existingProduct = currentOrder.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      return currentOrder.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...currentOrder, { ...product, quantity: 1 }];
  });
}


  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductGrid
          products={products}
          selectedCategory={selectedCategory}
          onAddToOrder={handleAddToOrder}
        />
      </div>

      <p className="mx-auto mt-6 max-w-7xl text-sm text-slate-600">
        Items in order: {order.length}
      </p>
    </main>
  );
}

export default App;
