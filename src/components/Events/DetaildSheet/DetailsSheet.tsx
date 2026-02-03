import { useCommentsList } from '@/api/events/tanstack/events.query';
import { useEventsStore } from '@/store/eventsStore/eventsStore';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useEffect, useMemo, useRef } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import CommentsList from './CommentsList';
import EventHeader from './EventHeader';
import SaveEventButton from './SaveEventButton';

const DetailsSheet = () => {
  const { activeEvent, setActiveEvent } = useEventsStore();

  const { data: comments, isLoading, isError } = useCommentsList(activeEvent ? activeEvent.id : 0);

  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30%', '60%'], []);

  useEffect(() => {
    activeEvent ? ref.current?.snapToIndex(1) : ref.current?.close();
  }, [activeEvent]);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={() => setActiveEvent(null)}>
      <BottomSheetScrollView contentContainerStyle={{ padding: 16 }}>
        {!activeEvent && <Text>No event selected</Text>}

        {activeEvent && (
          <>
            <EventHeader event={activeEvent} />
            <SaveEventButton event={activeEvent} />

            {isLoading && <ActivityIndicator size="small" />}
            {isError && <Text style={{ color: 'red' }}>Failed to load comments</Text>}

            {!isLoading && !isError && <CommentsList comments={comments ?? []} />}
          </>
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default DetailsSheet;
