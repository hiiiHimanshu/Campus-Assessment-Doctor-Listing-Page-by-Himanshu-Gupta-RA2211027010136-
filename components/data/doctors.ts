import { Doctor } from '../types';

// Keeping the mock data as fallback
export const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: ["Cardiologist", "Internal Medicine"],
    experience: 12,
    fees: 1500,
    rating: 4.8,
    location: "New York",
    consultationType: ["Video Consult", "In Clinic"],
    availability: "Available Today",
    imageUrl: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: ["Neurologist"],
    experience: 8,
    fees: 1200,
    rating: 4.6,
    location: "San Francisco",
    consultationType: ["Video Consult"],
    availability: "Available Tomorrow",
    imageUrl: "https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: ["Pediatrician", "Allergist"],
    experience: 15,
    fees: 900,
    rating: 4.9,
    location: "Chicago",
    consultationType: ["In Clinic"],
    availability: "Available Today",
    imageUrl: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: ["Orthopedic Surgeon"],
    experience: 20,
    fees: 2500,
    rating: 4.7,
    location: "Boston",
    consultationType: ["Video Consult", "In Clinic"],
    availability: "Available in 2 days",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    name: "Dr. Sophia Patel",
    specialty: ["Dermatologist"],
    experience: 6,
    fees: 1100,
    rating: 4.5,
    location: "Los Angeles",
    consultationType: ["Video Consult"],
    availability: "Available Today",
    imageUrl: "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    name: "Dr. Robert Williams",
    specialty: ["Gastroenterologist", "Internal Medicine"],
    experience: 10,
    fees: 1300,
    rating: 4.4,
    location: "Seattle",
    consultationType: ["In Clinic"],
    availability: "Available Tomorrow",
    imageUrl: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 7,
    name: "Dr. Olivia Thompson",
    specialty: ["Psychiatrist"],
    experience: 9,
    fees: 1800,
    rating: 4.9,
    location: "Denver",
    consultationType: ["Video Consult", "In Clinic"],
    availability: "Available Today",
    imageUrl: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 8,
    name: "Dr. David Lee",
    specialty: ["Ophthalmologist"],
    experience: 14,
    fees: 1000,
    rating: 4.6,
    location: "Atlanta",
    consultationType: ["In Clinic"],
    availability: "Available in 3 days",
    imageUrl: "https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 9,
    name: "Dr. Jessica Martinez",
    specialty: ["Endocrinologist", "Internal Medicine"],
    experience: 7,
    fees: 1400,
    rating: 4.7,
    location: "Miami",
    consultationType: ["Video Consult"],
    availability: "Available Tomorrow",
    imageUrl: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 10,
    name: "Dr. William Taylor",
    specialty: ["Urologist"],
    experience: 18,
    fees: 1700,
    rating: 4.8,
    location: "Philadelphia",
    consultationType: ["Video Consult", "In Clinic"],
    availability: "Available Today",
    imageUrl: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

// Helper function to get all unique specialties from the doctor data
export const getAllSpecialties = (doctors: Doctor[]): string[] => {
  const specialtiesSet = new Set<string>();
  
  doctors.forEach(doctor => {
    if (doctor.specialty) {
      doctor.specialty.forEach(specialty => {
        specialtiesSet.add(specialty);
      });
    }
  });
  
  return Array.from(specialtiesSet).sort();
};