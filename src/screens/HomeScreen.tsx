import EventsList from '@/components/Events/EventsList/EventsList';
import FilterEvents from '@/components/ui/FilterEvents';
import Header from '@/components/ui/Header';
import ThemedView from '@/components/ui/ThemedView';
import { useState } from 'react';
import { TextInput } from 'react-native';

const HomeScreen = () => {
  const [filter, setFilter] = useState<'all' | 'saved'>('all');
  const [search, setSearch] = useState('');
  return (
    <ThemedView edges={['left', 'right']}>
      <Header title="Events">
        <TextInput
          placeholder="Search by title..."
          value={search}
          onChangeText={setSearch}
          className="botder-border mt-2 rounded-md border-[1px] bg-background px-3 py-2"
        />
        <FilterEvents filter={filter} setFilter={setFilter} />
      </Header>

      <EventsList search={search} filter={filter} />
    </ThemedView>
  );
};

export default HomeScreen;
