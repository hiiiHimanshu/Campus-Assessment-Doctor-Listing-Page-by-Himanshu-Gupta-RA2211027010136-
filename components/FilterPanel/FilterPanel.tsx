import React from 'react';
import { Filter } from 'lucide-react';
import ConsultationTypeFilter from './ConsultationTypeFilter';
import SpecialtyFilter from './SpecialtyFilter';
import SortFilter from './SortFilter';
import { ConsultationType, SortOption } from '../../types';

interface FilterPanelProps {
  specialties: string[];
  selectedSpecialties: string[];
  selectedConsultationType: ConsultationType;
  selectedSortOption: SortOption;
  onSpecialtyChange: (specialty: string) => void;
  onConsultationTypeChange: (type: ConsultationType) => void;
  onSortChange: (option: SortOption) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  specialties,
  selectedSpecialties,
  selectedConsultationType,
  selectedSortOption,
  onSpecialtyChange,
  onConsultationTypeChange,
  onSortChange,
  isOpen,
  onToggle
}) => {
  return (
    <>
      {/* Mobile filter toggle button */}
      <div className="md:hidden mb-4">
        <button 
          onClick={onToggle}
          className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm hover:bg-gray-50"
        >
          <Filter size={16} className="mr-2" />
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      {/* Filter panel - always visible on desktop, toggled on mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            {selectedSpecialties.length > 0 || selectedConsultationType || selectedSortOption ? (
              <button 
                onClick={() => {
                  selectedSpecialties.forEach(s => onSpecialtyChange(s));
                  onConsultationTypeChange('');
                  onSortChange('');
                }}
                className="text-sky-600 text-sm hover:text-sky-800 transition-colors"
              >
                Clear all filters
              </button>
            ) : null}
          </div>
          
          <ConsultationTypeFilter 
            selectedType={selectedConsultationType} 
            onChange={onConsultationTypeChange} 
          />
          
          <SpecialtyFilter 
            specialties={specialties} 
            selectedSpecialties={selectedSpecialties} 
            onChange={onSpecialtyChange} 
          />
          
          <SortFilter 
            selectedSort={selectedSortOption} 
            onChange={onSortChange} 
          />
        </div>
      </div>
    </>
  );
};

export default FilterPanel;