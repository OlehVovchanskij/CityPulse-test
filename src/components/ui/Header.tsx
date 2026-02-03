import { FC, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from './Typography';
interface HeaderProps {
  title: string;
}
const Header: FC<PropsWithChildren<HeaderProps>> = ({ title, children }) => {
  return (
    <SafeAreaView
      edges={['top']}
      className="rounded-b-xl border-b border-border bg-header px-4 py-4">
      <Typography variant="h2" className="">
        {title}
      </Typography>
      {children}
    </SafeAreaView>
  );
};

export default Header;
