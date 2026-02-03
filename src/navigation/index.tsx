import OfflineBadge from '@/components/ui/OfflineBadge';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};
export const Navigation = () => {
  return (
    <>
      <OfflineBadge />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </>
  );
};
