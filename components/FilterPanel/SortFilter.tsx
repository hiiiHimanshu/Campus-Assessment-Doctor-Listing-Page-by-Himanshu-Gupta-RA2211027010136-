import React from 'react';
import { SortOption } from '../../types';

interface SortFilterProps {
  selectedSort: SortOption;
  onChange: (option: SortOption) => void;
}

const SortFilter: React.FC<SortFilterProps> = ({ selectedSort, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Sort By</h3>
      <div className="relative">
        <select
          value={selectedSort}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
        >
          <option value="">-- Select Option --</option>
          <option value="fees">Fees (Low to High)</option>
          <option value="experience">Experience (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;