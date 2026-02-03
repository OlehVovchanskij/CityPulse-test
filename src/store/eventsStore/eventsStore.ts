import { eventsPersistence } from '@/services/persistence/events.persistence';
import { create } from 'zustand';
import { EventsStore } from './eventsStore.types';

export const useEventsStore = create<EventsStore>((set, get) => ({
  savedEvents: [],
  activeEvent: null,
  addToSaved: (event) => {
    const current = get().savedEvents;

    if (current.some((e) => e.id === event.id)) return;

    const updated = [...current, event];
    set({ savedEvents: updated });

    eventsPersistence.save(updated);
  },

  removeFromSaved: (eventId) => {
    const updated = get().savedEvents.filter((e) => e.id !== eventId);

    set({ savedEvents: updated });
    eventsPersistence.save(updated);
  },

  loadSavedEvents: async () => {
    const stored = await eventsPersistence.load();
    if (stored) {
      set({ savedEvents: stored });
    }
  },
  toggleSave: (event) => {
    const current = get().savedEvents;

    if (current.some((e) => e.id === event.id)) {
      get().removeFromSaved(event.id);
    } else {
      get().addToSaved(event);
    }
  },
  isSaved: (eventId) => {
    return get().savedEvents.some((e) => e.id === eventId);
  },
  setActiveEvent: (event) => {
    set({ activeEvent: event });
  },
}));
