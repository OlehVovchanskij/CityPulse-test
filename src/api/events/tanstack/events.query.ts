import { Event } from '@/types/event.types';
import { generateDateFromId } from '@/utils/DateFromId';
import { formatDate } from '@/utils/formateDate';
import { generateLvivLocationFromId } from '@/utils/generateLocation';
import { useQuery } from '@tanstack/react-query';
import { getAllEvents } from '../events.api';
import { queryKeys } from './keys';
export interface FormattedEvent extends Event {
  date: Date;
  formattedDate: string;
  location?: {
    lat: number;
    lng: number;
  };
}
export const useEventsList = () => {
  return useQuery<Event[], Error, FormattedEvent[]>({
    queryKey: queryKeys.events.all,
    queryFn: getAllEvents,
    select: (data) => {
      return data.map((event) => ({
        ...event,
        date: generateDateFromId(event.id),
        formattedDate: formatDate(generateDateFromId(event.id)),
        location: generateLvivLocationFromId(event.id),
      }));
    },
  });
};
