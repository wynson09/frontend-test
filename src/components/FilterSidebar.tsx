import React from 'react';

// type for sidebar filters, with price as string
interface SidebarFilters {
  tag: string;
  price: string;
  subscription: string | null;
}

interface FilterSidebarProps {
  filters: SidebarFilters;
  onChange: (filters: Partial<SidebarFilters>) => void;
  onClear: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onChange, onClear }) => {
  return (
    <aside className="w-80 min-h-screen p-6 bg-sidebar text-light border-r border-light flex flex-col rounded-tr-2xl rounded-br-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-6 tracking-wide text-light">Filters</h2>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-light/80">Tag</label>
        <input
          type="text"
          className="w-full border border-light rounded-md p-3 text-sidebar bg-light focus:border-accent focus:ring-2 focus:ring-accent/20"
          value={filters.tag}
          onChange={e => onChange({ tag: e.target.value })}
          placeholder="Search by tag..."
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-light/80">Price</label>
        <input
          type="number"
          className="w-full border border-light rounded-md p-3 text-sidebar bg-light focus:border-accent focus:ring-2 focus:ring-accent/20"
          value={filters.price}
          onChange={e => onChange({ price: e.target.value })}
          placeholder="Filter by price..."
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-medium text-light/80">Subscription</label>
        <select
          className="w-full border border-light rounded-md p-3 text-sidebar bg-light focus:border-accent focus:ring-2 focus:ring-accent/20"
          value={filters.subscription ?? ''}
          onChange={e => onChange({ subscription: e.target.value || null })}
        >
          <option value="">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <button
        className="mt-4 bg-accent text-white font-semibold py-2 px-4 rounded hover:bg-accent/80 transition"
        onClick={onClear}
        type="button"
      >
        Clear Filters
      </button>
    </aside>
  );
};

export default FilterSidebar; 