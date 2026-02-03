import { useEventsList } from '@/api/events/tanstack/events.query';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const { data: events, isLoading, isError } = useEventsList();
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
              title={event.title}
              description={event.body}
              key={event.id}
              coordinate={{
                latitude: event.location.lat,
                longitude: event.location.lng,
              }}
            />
          ))}
      </MapView>
    </View>
  );
};

export default MapScreen;
