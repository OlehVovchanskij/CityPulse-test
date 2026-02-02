import { FC, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from './Typography';
interface HeaderProps {
  title: string;
}
const Header: FC<PropsWithChildren<HeaderProps>> = ({ title }) => {
  return (
    <SafeAreaView
      edges={['top']}
      className="border-border bg-header rounded-b-xl border-b px-4 py-4">
      <Typography variant="h2" className="">
        {title}
      </Typography>
    </SafeAreaView>
  );
};

export default Header;
