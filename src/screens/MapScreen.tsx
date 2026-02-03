import { FormattedEvent, useEventsList } from '@/api/events/tanstack/events.query';
import DetailsSheet from '@/components/Events/DetaildSheet/DetailsSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const MapScreen = () => {
  const { data: events, isLoading, isError } = useEventsList();

  const [selectedEvent, setSelectedEvent] = useState<FormattedEvent | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (selectedEvent) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [selectedEvent]);
  const onMarkerPress = (event: FormattedEvent) => {
    setSelectedEvent(event);
  };
  if (isLoading || isError) {
    return <View />;
  }
  return (
    <View className="flex-1">
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 49.8397,
          longitude: 24.0297,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        {events &&
          events.map((event) => (
            <Marker
              subtitleVisibility="visible"
              key={event.id}
              coordinate={{
                latitude: event.location.lat,
                longitude: event.location.lng,
              }}
              onPress={() => onMarkerPress(event)}
            />
          ))}
      </MapView>

      <DetailsSheet
        bottomSheetRef={bottomSheetRef}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
    </View>
  );
};

export default MapScreen;
