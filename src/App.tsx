import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel/FilterPanel';
import DoctorList from './components/DoctorList/DoctorList';
import { fetchDoctors } from './utils/apiUtils';
import { getAllSpecialties } from './data/doctors';
import { updateQueryParams, getQueryParams } from './utils/urlUtils';
import { 
  filterDoctorsByName, 
  filterDoctorsByConsultationType, 
  filterDoctorsBySpecialties,
  sortDoctors,
  getAutocompleteSuggestions
} from './utils/filterUtils';
import { Doctor, ConsultationType, SortOption } from './types';

function App() {
  // State
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [consultationType, setConsultationType] = useState<ConsultationType>('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('');
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [suggestions, setSuggestions] = useState<Doctor[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch doctors data
  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
        
        // Load filters from URL
        const params = getQueryParams();
        setSearchTerm(params.search || '');
        setConsultationType(params.consultation || '');
        setSelectedSpecialties(params.specialties || []);
        setSortOption(params.sort || '');
      } catch (err) {
        setError('Failed to load doctors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadDoctors();
  }, []);
  
  // Get all unique specialties
  const allSpecialties = React.useMemo(() => {
    return getAllSpecialties(doctors);
  }, [doctors]);
  
  // Apply filters when any filter state changes
  useEffect(() => {
    setLoading(true);
    
    // Update URL params
    updateQueryParams({
      search: searchTerm,
      consultation: consultationType,
      specialties: selectedSpecialties,
      sort: sortOption,
    });
    
    // Apply filters
    setTimeout(() => {
      let result = [...doctors];
      
      if (searchTerm) {
        result = filterDoctorsByName(result, searchTerm);
      }
      
      if (consultationType) {
        result = filterDoctorsByConsultationType(result, consultationType);
      }
      
      if (selectedSpecialties.length > 0) {
        result = filterDoctorsBySpecialties(result, selectedSpecialties);
      }
      
      if (sortOption) {
        result = sortDoctors(result, sortOption);
      }
      
      setFilteredDoctors(result);
      setLoading(false);
    }, 300);
  }, [searchTerm, consultationType, selectedSpecialties, sortOption, doctors]);
  
  // Handle search input change
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    
    if (term) {
      const newSuggestions = getAutocompleteSuggestions(doctors, term);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  
  // Handle suggestion click
  const handleSuggestionClick = (doctorId: number) => {
    const doctor = doctors.find(d => d.id === doctorId);
    if (doctor) {
      setSearchTerm(doctor.name);
      setSuggestions([]);
    }
  };
  
  // Toggle specialty selection
  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialties(prev => {
      if (prev.includes(specialty)) {
        return prev.filter(s => s !== specialty);
      } else {
        return [...prev, specialty];
      }
    });
  };
  
  // Toggle mobile filter panel
  const handleFilterToggle = () => {
    setIsFilterOpen(prev => !prev);
  };
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={handleFilterToggle} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page title and search bar */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find the Right Doctor</h1>
          <SearchBar 
            onSearch={handleSearchChange}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
            initialValue={searchTerm}
          />
        </div>
        
        {/* Main content with filters and doctor list */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Filters - sidebar on desktop, toggleable on mobile */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <FilterPanel 
              specialties={allSpecialties}
              selectedSpecialties={selectedSpecialties}
              selectedConsultationType={consultationType}
              selectedSortOption={sortOption}
              onSpecialtyChange={handleSpecialtyChange}
              onConsultationTypeChange={setConsultationType}
              onSortChange={setSortOption}
              isOpen={isFilterOpen}
              onToggle={handleFilterToggle}
            />
          </div>
          
          {/* Doctor list */}
          <div className="md:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {loading ? 'Finding doctors...' : `${filteredDoctors.length} Doctors Found`}
              </h2>
            </div>
            
            <DoctorList doctors={filteredDoctors} loading={loading} />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200 mt-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>© 2025 DoctorConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;