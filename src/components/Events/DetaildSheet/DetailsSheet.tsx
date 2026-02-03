import { Typography } from '@/components/ui/Typography';
import { useEventsStore } from '@/store/eventsStore/eventsStore';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { RefObject, useEffect, useMemo, useRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
interface DetailsSheetProps {
  ref: RefObject<BottomSheet | null>;
}
const DetailsSheet = () => {
  const { activeEvent, setActiveEvent, toggleSave, isSaved } = useEventsStore();
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30%'], []);
  useEffect(() => {
    if (activeEvent) {
      ref.current?.snapToIndex(1);
    } else {
      ref.current?.close();
    }
  }, [activeEvent]);
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      onClose={() => setActiveEvent(null)}
      enablePanDownToClose>
      <BottomSheetView style={{ padding: 16, minHeight: 200 }}>
        {activeEvent ? (
          <>
            <Typography variant="h2" className="mb-2">
              {activeEvent.title}
            </Typography>
            <Typography variant="body" className="mb-4">
              {activeEvent.formattedDate}
            </Typography>
            <Typography variant="body">{activeEvent.body}</Typography>
            <TouchableOpacity
              className="mt-6 rounded-3xl bg-blue-500 px-4 py-2"
              onPress={() => toggleSave(activeEvent)}>
              <Typography variant="h3" className="text-center text-white">
                {isSaved(activeEvent.id) ? 'Unsave Event' : 'Save Event'}
              </Typography>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={{ color: 'white' }}>No event selected</Text>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default DetailsSheet;
