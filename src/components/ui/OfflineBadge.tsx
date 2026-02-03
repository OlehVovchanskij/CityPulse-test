import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { Text } from 'react-native';
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';

const OfflineBadge = () => {
  const isOnline = useNetworkStatus();

  if (isOnline) return null;

  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutDown}
      className="absolute bottom-0 z-50 w-full bg-yellow-400 px-4 py-2">
      <Text className="text-center font-medium text-yellow-900">
        You are offline. Showing cached data
      </Text>
    </Animated.View>
  );
};

export default OfflineBadge;
