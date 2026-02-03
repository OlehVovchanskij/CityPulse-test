import { FormattedEvent } from '@/api/events/tanstack/events.query';

export type EventsStoreState = {
  savedEvents: FormattedEvent[] | [];
};
export type EventsStoreActions = {
  toggleSave: (event: FormattedEvent) => void;
  addToSaved: (event: FormattedEvent) => void;
  removeFromSaved: (eventId: number) => void;
  loadSavedEvents: () => void;
  isSaved: (eventId: number) => boolean;
};
export type EventsStore = EventsStoreState & EventsStoreActions;
