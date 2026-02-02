import HomeScreen from '@/screens/HomeScreen';
import { Home, LucideIcon, Map, Star } from 'lucide-react-native';

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
    component: HomeScreen,
    icon: Map,
    label: 'Map',
  },
  {
    name: 'Saved',
    component: HomeScreen,
    icon: Star,
    label: 'Saved',
  },
];
