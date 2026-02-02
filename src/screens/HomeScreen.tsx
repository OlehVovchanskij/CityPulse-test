import EventsList from '@/components/Events/EventsList/EventsList';
import Header from '@/components/ui/Header';
import ThemedView from '@/components/ui/ThemedView';

const HomeScreen = () => {
  return (
    <ThemedView edges={['left', 'right', 'bottom']}>
      <Header title="Home" />

      <EventsList />
    </ThemedView>
  );
};

export default HomeScreen;
