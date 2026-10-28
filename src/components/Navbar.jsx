
function Navbar({ searchQuery, onSearchChange, orderCount = 0 }) {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <nav className="mx-auto flex min-w-0 max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight"
        >
          Sport<span className="text-orange-500">Store</span>
        </a>

        {/* Search */}
        <div className="min-w-0 w-full md:max-w-md">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>

          <input
            id="product-search"
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search for products..."
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
          <a
            href="#home"
            className="transition-colors hover:text-orange-400"
          >
            Products
          </a>

          <a
            href="#categories"
            className="transition-colors hover:text-orange-400"
          >
            Categories
          </a>

          <a
            href="#order"
            className="flex items-center gap-2 transition-colors hover:text-orange-400"
          >
            Cart
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-orange-500 px-1.5 text-xs font-bold text-white">
              {orderCount}
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
