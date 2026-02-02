import { Event } from '@/types/event.types';
import { api } from '../axios';

export const getAllEvents = async (): Promise<Event[]> => {
  const response = await api.get('/posts');

  return response.data;
};
