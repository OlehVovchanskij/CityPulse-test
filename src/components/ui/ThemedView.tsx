import cn from 'clsx';
import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
interface ThemedViewProps extends PropsWithChildren {
  className?: string;
  edges?: Array<'top' | 'bottom' | 'left' | 'right'>;
}
const ThemedView = ({ className, edges, children }: ThemedViewProps) => {
  return (
    <SafeAreaView
      className={cn('bg-background flex-1', className)}
      edges={edges || ['top', 'bottom']}>
      {children}
    </SafeAreaView>
  );
};

export default ThemedView;
