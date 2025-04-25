import { QueryParams } from '../types';

export const updateQueryParams = (params: QueryParams) => {
  const searchParams = new URLSearchParams();
  
  if (params.search) {
    searchParams.set('search', params.search);
  }
  
  if (params.consultation) {
    searchParams.set('consultation', params.consultation);
  }
  
  if (params.specialties && params.specialties.length > 0) {
    searchParams.set('specialties', params.specialties.join(','));
  }
  
  if (params.sort) {
    searchParams.set('sort', params.sort);
  }
  
  const newUrl = `${window.location.pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
  window.history.pushState({}, '', newUrl);
};

export const getQueryParams = (): QueryParams => {
  const searchParams = new URLSearchParams(window.location.search);
  
  return {
    search: searchParams.get('search') || '',
    consultation: (searchParams.get('consultation') || '') as QueryParams['consultation'],
    specialties: searchParams.get('specialties')?.split(',').filter(Boolean) || [],
    sort: (searchParams.get('sort') || '') as QueryParams['sort'],
  };
};