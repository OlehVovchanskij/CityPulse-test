import Header from '@/components/ui/Header';
import ThemedView from '@/components/ui/ThemedView';
import { Text } from 'react-native';

const HomeScreen = () => {
  return (
    <ThemedView edges={['left', 'right']}>
      <Header title="Home" />
      <Text>Home Screen</Text>
    </ThemedView>
  );
};

export default HomeScreen;
