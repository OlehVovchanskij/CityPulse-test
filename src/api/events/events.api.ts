import { api } from '../axios';

export const getAllEvents = async () => {
  const response = await api.get('/posts');

  return response.data;
};
