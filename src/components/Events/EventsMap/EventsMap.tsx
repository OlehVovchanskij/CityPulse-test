import { FormattedEvent, useEventsList } from '@/api/events/tanstack/events.query';
import { useEventsStore } from '@/store/eventsStore/eventsStore';
import { ActivityIndicator, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const EventsMap = () => {
  const { data: events, isLoading, isError } = useEventsList();
  const { setActiveEvent } = useEventsStore();

  if (isLoading || isError) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" className="self-center" />
      </View>
    );
  }

  const onMarkerPress = (event: FormattedEvent) => {
    setActiveEvent(event);
  };
  return (
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
  );
};

export default EventsMap;
