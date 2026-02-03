import { useEventsStore } from '@/store/eventsStore/eventsStore';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export const useClearActiveEvent = () => {
  const { setActiveEvent } = useEventsStore();

  useFocusEffect(
    useCallback(() => {
      setActiveEvent(null);
      return () => {};
    }, [])
  );
};
