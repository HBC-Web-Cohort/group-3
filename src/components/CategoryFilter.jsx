
const categories = [
  "All",
  "Football",
  "Basketball",
  "Running",
  "Fitness",
];

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <aside id="categories" className="min-w-0 w-full lg:w-56 lg:shrink-0">
      <h2 className="mb-4 text-lg font-bold text-slate-900">
        Categories
      </h2>

      <div className="flex max-w-full gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`whitespace-nowrap rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {category === "All" ? "All Products" : category}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default CategoryFilter;
