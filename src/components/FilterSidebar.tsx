import React from 'react';
import { Filters } from '../store/productStore';

interface FilterSidebarProps {
  filters: Filters;
  onChange: (filters: Partial<Filters>) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onChange }) => {
  return (
    <aside className="w-64 p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Tag</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={filters.tag}
          onChange={e => onChange({ tag: e.target.value })}
          placeholder="Search by tag..."
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Price</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={filters.price ?? ''}
          onChange={e => onChange({ price: e.target.value ? Number(e.target.value) : null })}
          placeholder="Filter by price..."
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Subscription</label>
        <select
          className="w-full border rounded p-2"
          value={filters.subscription ?? ''}
          onChange={e => onChange({ subscription: e.target.value || null })}
        >
          <option value="">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </aside>
  );
};

export default FilterSidebar; 