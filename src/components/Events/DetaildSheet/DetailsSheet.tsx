import { FormattedEvent } from '@/api/events/tanstack/events.query';
import { Typography } from '@/components/ui/Typography';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { RefObject, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
interface DetailsSheetProps {
  bottomSheetRef: RefObject<BottomSheet | null>;
  selectedEvent: FormattedEvent | null;
  setSelectedEvent: (event: FormattedEvent | null) => void;
}
const DetailsSheet = ({ bottomSheetRef, selectedEvent, setSelectedEvent }: DetailsSheetProps) => {
  const snapPoints = useMemo(() => ['30%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onClose={() => setSelectedEvent(null)}
      enablePanDownToClose>
      <BottomSheetView style={{ padding: 16, minHeight: 200 }}>
        {selectedEvent ? (
          <>
            <Typography variant="h2" className="mb-2">
              {selectedEvent.title}
            </Typography>
            <Typography variant="body" className="mb-4">
              {selectedEvent.formattedDate}
            </Typography>
            <Typography variant="body">{selectedEvent.body}</Typography>
            <TouchableOpacity className="mt-6 rounded-3xl bg-blue-500 px-4 py-2">
              <Typography variant="h3" className="text-center text-white">
                Save
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
