import { useEventsList } from '@/api/events/tanstack/events.query';
import { FlatList, View } from 'react-native';
import EventCard from '../EventCard/EventCard';

const EventsList = () => {
  const { data: events, isLoading, isError } = useEventsList();
  if (isLoading) {
    return <View></View>;
  }
  if (isError) {
    return <View></View>;
  }
  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
        data={events}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        ItemSeparatorComponent={() => <View className="h-4" />}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  );
};

export default EventsList;
