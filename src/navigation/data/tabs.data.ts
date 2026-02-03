import HomeScreen from '@/screens/HomeScreen';
import MapScreen from '@/screens/MapScreen';
import { Home, LucideIcon, Map } from 'lucide-react-native';

export interface Tab {
  name: string;
  component: React.ComponentType<any>;
  icon: LucideIcon;
  label?: string;
}
export const tabsData: Tab[] = [
  {
    name: 'Events',
    component: HomeScreen,
    icon: Home,
    label: 'Events',
  },
  {
    name: 'EventsMap',
    component: MapScreen,
    icon: Map,
    label: 'Map',
  },
];
