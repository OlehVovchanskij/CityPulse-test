import { useEventsList } from '@/api/events/tanstack/events.query';
import { Typography } from '@/components/ui/Typography';
import { useFilterEvents } from '@/hooks/useFilterEvents';
import { useEventsStore } from '@/store/eventsStore/eventsStore';
import { Bot } from 'lucide-react-native';
import { ActivityIndicator, FlatList, View } from 'react-native';
import MemoizedEventCard from '../EventCard/EventCard';

const EventsList = ({ search, filter }: { search: string; filter: 'all' | 'saved' }) => {
  const { data: events, isLoading, isError, refetch, isRefetching } = useEventsList();
  const { savedEvents } = useEventsStore();

  const filteredEvents = useFilterEvents(events || [], search, filter, savedEvents || []);
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" className="self-center" />
      </View>
    );
  }
  if (isError) {
    return (
      <View className="flex-1 items-center justify-center">
        <Bot size={96} color="#64748B" className="mb-4" />
        <Typography variant="h3">Failed to load events. Please try again later.</Typography>
      </View>
    );
  }
  return (
    <View className="flex-1">
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80, paddingTop: 16 }}
        data={filteredEvents}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        ItemSeparatorComponent={() => <View className="h-4" />}
        renderItem={({ item }) => <MemoizedEventCard event={item} />}
        onRefresh={refetch}
        refreshing={isRefetching}
      />
    </View>
  );
};

export default EventsList;
