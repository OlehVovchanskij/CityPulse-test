import { FormattedEvent } from '@/api/events/tanstack/events.query';
import { useMemo } from 'react';

export function useFilterEvents(
  events: FormattedEvent[],
  search: string,
  filter: 'all' | 'saved',
  savedEvents: FormattedEvent[]
) {
  return useMemo(() => {
    let result = events;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((e) => e.title.toLowerCase().includes(q));
    }

    if (filter === 'saved') {
      const savedIds = new Set(savedEvents.map((e) => e.id));
      result = result.filter((e) => savedIds.has(e.id));
    }

    return result;
  }, [events, search, filter, savedEvents]);
}
