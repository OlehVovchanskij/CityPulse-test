import { queryClientConfig } from '@/config/queryClient';
import { Navigation } from '@/navigation';
import { initReactQuery } from '@/services/react-query/init';
import { persister } from '@/services/react-query/persist';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  useEffect(() => {
    initReactQuery();
  }, []);
  const queryClient = new QueryClient(queryClientConfig);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: persister }}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
        <StatusBar style="auto" />
      </PersistQueryClientProvider>
    </GestureHandlerRootView>
  );
}
