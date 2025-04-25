export interface Doctor {
  id: number;
  name: string;
  specialty: string[];
  experience: number;
  fees: number;
  rating: number;
  location: string;
  consultationType: ('Video Consult' | 'In Clinic')[];
  availability: string;
  imageUrl: string;
}

export type ConsultationType = 'Video Consult' | 'In Clinic' | '';

export type SortOption = 'fees' | 'experience' | '';

export interface QueryParams {
  search?: string;
  consultation?: ConsultationType;
  specialties?: string[];
  sort?: SortOption;
}