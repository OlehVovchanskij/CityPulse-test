import NetInfo from '@react-native-community/netinfo';
import { onlineManager } from '@tanstack/react-query';

export const setupOnlineManager = () => {
  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      const isOnline = Boolean(state.isConnected) && Boolean(state.isInternetReachable);

      setOnline(isOnline);
    });
  });
};
