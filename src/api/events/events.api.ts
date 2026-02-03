import { Comment } from '@/types/comment.types';
import { Event } from '@/types/event.types';
import { api } from '../axios';

export const getAllEvents = async (): Promise<Event[]> => {
  const response = await api.get('/posts');

  return response.data;
};
export const getCommentsByEvent = async (eventId: number): Promise<Comment[]> => {
  const response = await api.get(`/posts/${eventId}/comments`);

  return response.data;
};
