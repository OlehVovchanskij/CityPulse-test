import { FormattedEvent } from '@/api/events/tanstack/events.query';
import { Typography } from '@/components/ui/Typography';
import { useEventsStore } from '@/store/eventsStore/eventsStore';
import { TouchableOpacity } from 'react-native';

type Props = {
  event: FormattedEvent;
};

const SaveEventButton = ({ event }: Props) => {
  const { toggleSave, isSaved } = useEventsStore();

  return (
    <TouchableOpacity
      className="mb-6 rounded-3xl bg-blue-500 px-4 py-2"
      onPress={() => toggleSave(event)}>
      <Typography variant="h3" className="text-center text-white">
        {isSaved(event.id) ? 'Unsave Event' : 'Save Event'}
      </Typography>
    </TouchableOpacity>
  );
};

export default SaveEventButton;
