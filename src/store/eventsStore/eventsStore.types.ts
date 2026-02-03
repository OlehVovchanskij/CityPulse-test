import { FormattedEvent } from '@/api/events/tanstack/events.query';

export type EventsStoreState = {
  savedEvents: FormattedEvent[] | [];
  activeEvent: FormattedEvent | null;
};
export type EventsStoreActions = {
  toggleSave: (event: FormattedEvent) => void;
  addToSaved: (event: FormattedEvent) => void;
  removeFromSaved: (eventId: number) => void;
  loadSavedEvents: () => void;
  isSaved: (eventId: number) => boolean;
  setActiveEvent: (event: FormattedEvent | null) => void;
};
export type EventsStore = EventsStoreState & EventsStoreActions;
