import { Doctor, ConsultationType, SortOption } from '../types';

export const filterDoctorsByName = (doctors: Doctor[], searchTerm: string): Doctor[] => {
  if (!searchTerm) return doctors;
  
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(lowerCaseSearchTerm)
  );
};

export const filterDoctorsByConsultationType = (doctors: Doctor[], consultationType: ConsultationType): Doctor[] => {
  if (!consultationType) return doctors;
  
  return doctors.filter(doctor => 
    doctor.consultationType && doctor.consultationType.includes(consultationType)
  );
};

export const filterDoctorsBySpecialties = (doctors: Doctor[], selectedSpecialties: string[]): Doctor[] => {
  if (!selectedSpecialties.length) return doctors;
  
  return doctors.filter(doctor => 
    doctor.specialty.some(specialty => selectedSpecialties.includes(specialty))
  );
};

export const sortDoctors = (doctors: Doctor[], sortOption: SortOption): Doctor[] => {
  if (!sortOption) return doctors;
  
  return [...doctors].sort((a, b) => {
    if (sortOption === 'fees') {
      return a.fees - b.fees; // Sort by fees (ascending)
    } else if (sortOption === 'experience') {
      return b.experience - a.experience; // Sort by experience (descending)
    }
    return 0;
  });
};

export const getAutocompleteSuggestions = (doctors: Doctor[], searchTerm: string): Doctor[] => {
  if (!searchTerm) return [];
  
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(lowerCaseSearchTerm)
  );
  
  // Return top 3 matches
  return filteredDoctors.slice(0, 3);
};