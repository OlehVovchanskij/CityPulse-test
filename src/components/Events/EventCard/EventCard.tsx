import { FormattedEvent } from '@/api/events/tanstack/events.query';
import { Typography } from '@/components/ui/Typography';
import { TouchableOpacity, View } from 'react-native';

const EventCard = ({ event }: { event: FormattedEvent }) => {
  return (
    <View className="border-border bg-card w-full flex-row  items-center justify-between gap-2 rounded-md border-[1px] px-4 py-3">
      <View className="min-w-0 flex-1">
        <Typography variant="h3" className="">
          {event.title}
        </Typography>
        <Typography variant="caption" className="mt-1">
          {event.formattedDate}
        </Typography>
      </View>
      <View>
        <TouchableOpacity className="self-start rounded-md bg-blue-500 px-2 py-1 ">
          <Typography variant="body" className="font-semibold text-white ">
            Details
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventCard;
