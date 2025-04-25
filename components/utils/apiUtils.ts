import { Doctor } from '../types';
import { mockDoctors } from '../data/doctors';

const API_URL = 'https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json';

export const fetchDoctors = async (): Promise<Doctor[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch doctors');
    }
    const data = await response.json();
    return Array.isArray(data) ? data : mockDoctors;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    // Return mock data as fallback
    return mockDoctors;
  }
};