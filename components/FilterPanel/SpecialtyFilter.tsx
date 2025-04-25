import React from 'react';

interface SpecialtyFilterProps {
  specialties: string[];
  selectedSpecialties: string[];
  onChange: (specialty: string) => void;
}

const SpecialtyFilter: React.FC<SpecialtyFilterProps> = ({ 
  specialties, 
  selectedSpecialties, 
  onChange 
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Specialties</h3>
      <div className="max-h-60 overflow-y-auto pr-2 space-y-2">
        {specialties.map((specialty) => (
          <label key={specialty} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedSpecialties.includes(specialty)}
              onChange={() => onChange(specialty)}
              className="h-4 w-4 text-sky-600 rounded border-gray-300 focus:ring-sky-500"
            />
            <span className="text-gray-800">{specialty}</span>
          </label>
        ))}
      </div>
      
      {selectedSpecialties.length > 0 && (
        <button
          onClick={() => selectedSpecialties.forEach(s => onChange(s))}
          className="text-sky-600 text-sm hover:text-sky-800 transition-colors mt-3"
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default SpecialtyFilter;