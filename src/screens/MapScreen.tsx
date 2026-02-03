import DetailsSheet from '@/components/Events/DetaildSheet/DetailsSheet';
import EventsMap from '@/components/Events/EventsMap/EventsMap';
import { useClearActiveEvent } from '@/hooks/useClearActiveEvent';
import { View } from 'react-native';
const MapScreen = () => {
  useClearActiveEvent();
  return (
    <View className="flex-1">
      <EventsMap />

      <DetailsSheet />
    </View>
  );
};

export default MapScreen;
