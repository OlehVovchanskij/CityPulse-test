import { Typography } from '@/components/ui/Typography';

type Props = {
  event: {
    title: string;
    formattedDate: string;
    body: string;
  };
};

const EventHeader = ({ event }: Props) => (
  <>
    <Typography variant="h2" className="mb-2">
      {event.title}
    </Typography>

    <Typography variant="body" className="mb-4">
      {event.formattedDate}
    </Typography>

    <Typography variant="body" className="mb-6">
      {event.body}
    </Typography>
  </>
);

export default EventHeader;
