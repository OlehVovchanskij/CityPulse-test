import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabsData } from './data/tabs.data';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {tabsData.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({ color, size }) => <item.icon color={color} size={size} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
export default Tabs;
