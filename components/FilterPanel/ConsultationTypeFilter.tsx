import React from 'react';
import { ConsultationType } from '../../types';

interface ConsultationTypeFilterProps {
  selectedType: ConsultationType;
  onChange: (type: ConsultationType) => void;
}

const ConsultationTypeFilter: React.FC<ConsultationTypeFilterProps> = ({ selectedType, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Consultation Type</h3>
      <div className="space-y-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            checked={selectedType === 'Video Consult'}
            onChange={() => onChange('Video Consult')}
            className="h-4 w-4 text-sky-600 border-gray-300 focus:ring-sky-500"
          />
          <span className="text-gray-800">Video Consult</span>
        </label>
        
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            checked={selectedType === 'In Clinic'}
            onChange={() => onChange('In Clinic')}
            className="h-4 w-4 text-sky-600 border-gray-300 focus:ring-sky-500"
          />
          <span className="text-gray-800">In Clinic</span>
        </label>
        
        {selectedType && (
          <button
            onClick={() => onChange('')}
            className="text-sky-600 text-sm hover:text-sky-800 transition-colors mt-2"
          >
            Clear selection
          </button>
        )}
      </div>
    </div>
  );
};

export default ConsultationTypeFilter;