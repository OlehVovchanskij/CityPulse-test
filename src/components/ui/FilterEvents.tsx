import { Pressable, Text, View } from 'react-native';
type FilterMode = 'all' | 'saved';
interface FilterEventsProps {
  filter: FilterMode;
  setFilter: (mode: FilterMode) => void;
}
const FilterEvents = ({ filter, setFilter }: FilterEventsProps) => {
  return (
    <View className="mt-4 flex-row rounded-md bg-background p-1">
      {['all', 'saved'].map((mode) => (
        <Pressable
          key={mode}
          onPress={() => setFilter(mode as FilterMode)}
          className={`flex-1 rounded-md py-2 ${filter === mode ? 'bg-white' : ''}`}>
          <Text className="text-center">{mode === 'all' ? 'All' : 'Saved'}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FilterEvents;
