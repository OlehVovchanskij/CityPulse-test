const ROOT_KEY = ['root'] as const;
export const queryKeys = {
  all: ROOT_KEY,
  events: {
    all: [...ROOT_KEY, 'events'] as const,
    eventDetails: (eventId: string) => [...ROOT_KEY, 'events', 'details', eventId] as const,
  },
};
