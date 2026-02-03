import DetailsSheet from '@/components/Events/DetaildSheet/DetailsSheet';
import EventsList from '@/components/Events/EventsList/EventsList';
import FilterEvents from '@/components/ui/FilterEvents';
import Header from '@/components/ui/Header';
import ThemedView from '@/components/ui/ThemedView';
import { useClearActiveEvent } from '@/hooks/useClearActiveEvent';
import { useState } from 'react';
import { TextInput } from 'react-native';

const HomeScreen = () => {
  useClearActiveEvent();

  const [filter, setFilter] = useState<'all' | 'saved'>('all');
  const [search, setSearch] = useState('');

  return (
    <ThemedView edges={['left', 'right']}>
      <Header title="Events">
        <TextInput
          placeholder="Search by title..."
          value={search}
          onChangeText={setSearch}
          className="mt-2 rounded-md border-[1px] border-border bg-background px-3 py-2"
        />
        <FilterEvents filter={filter} setFilter={setFilter} />
      </Header>

      <EventsList search={search} filter={filter} />

      <DetailsSheet />
    </ThemedView>
  );
};

export default HomeScreen;
