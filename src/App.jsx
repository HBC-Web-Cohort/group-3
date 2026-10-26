
import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import CheckoutForm from "./components/CheckoutForm";
import OrderSummary from "./components/OrderSummary";
import products from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [order, setOrder] = useState([]);
  const [notice, setNotice] = useState("");

  const visibleProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (!query || `${product.name} ${product.category}`.toLowerCase().includes(query))
    );
  }, [selectedCategory, searchQuery]);

  const orderCount = order.reduce((total, item) => total + item.quantity, 0);

  function handleAddToOrder(product) {
    setOrder((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
    });
    setNotice(`${product.name} added to your order.`);
  }
  const handleUpdateQuantity = (id, quantity) => setOrder((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
  const handleRemoveProduct = (id) => setOrder((current) => current.filter((item) => item.id !== id));


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} orderCount={orderCount} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">SportStore collection</p><h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Gear up for your next win.</h1><p className="mt-3 text-slate-600">Shop dependable equipment for the sports you love.</p></div>
        {notice && <div role="status" className="mb-6 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"><span>{notice}</span><button onClick={() => setNotice("")} className="text-emerald-700" aria-label="Dismiss message">×</button></div>}
      <div className="grid gap-8 xl:grid-cols-[220px_minmax(0,1fr)_330px]">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductGrid
          products={visibleProducts}
          onAddToOrder={handleAddToOrder}
        />
        <aside id="order" className="space-y-5 xl:sticky xl:top-5 xl:self-start"><OrderSummary order={order} onUpdateQuantity={handleUpdateQuantity} onRemoveProduct={handleRemoveProduct} /><CheckoutForm order={order} onComplete={() => { setOrder([]); setNotice(""); }} /></aside>
      </div></main></div>
  );
}

export default App;
