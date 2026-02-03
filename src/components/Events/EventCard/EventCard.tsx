import { FormattedEvent } from '@/api/events/tanstack/events.query';
import { Typography } from '@/components/ui/Typography';
import { useEventsStore } from '@/store/eventsStore/eventsStore';
import { Star } from 'lucide-react-native';
import { Pressable, TouchableOpacity, View } from 'react-native';

const EventCard = ({ event }: { event: FormattedEvent }) => {
  const { toggleSave, isSaved } = useEventsStore();

  return (
    <View className="w-full flex-row items-center justify-between  gap-2 rounded-md border-[1px] border-border bg-card px-4 py-3">
      <View className="min-w-0 flex-1">
        <Typography variant="h3" className="">
          {event.title}
        </Typography>
        <Typography variant="caption" className="mt-1">
          {event.formattedDate}
        </Typography>
      </View>
      <View className="items-center justify-between gap-2">
        <TouchableOpacity className="self-start rounded-md bg-blue-500 px-2 py-1 ">
          <Typography variant="body" className="font-semibold text-white ">
            Details
          </Typography>
        </TouchableOpacity>
        <Pressable
          className="rounded-md bg-slate-100 px-2 py-1 active:bg-slate-200"
          onPress={() => toggleSave(event)}>
          <Star
            size={24}
            color={isSaved(event.id) ? '#F59E0B' : '#64748B'}
            fill={isSaved(event.id) ? '#FACC15' : 'transparent'}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default EventCard;
