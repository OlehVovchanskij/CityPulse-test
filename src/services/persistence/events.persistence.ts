import { FormattedEvent } from '@/api/events/tanstack/events.query';
import { ASYNC_STORAGE_KEYS } from '@/constants/storage';
import { storage } from '../storage/AsyncStorage';

export const eventsPersistence = {
  load: () => storage.get<FormattedEvent[]>(ASYNC_STORAGE_KEYS.savedEvents),
  save: (events: FormattedEvent[]) => storage.set(ASYNC_STORAGE_KEYS.savedEvents, events),
};
