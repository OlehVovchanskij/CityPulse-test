import cn from 'clsx';
import { Text, TextProps } from 'react-native';

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'small' | 'error';

interface TypographyProps extends TextProps {
  variant?: Variant;
}

export function Typography({ variant = 'body', className, ...props }: TypographyProps) {
  const styles = {
    h1: 'text-3xl font-bold text-text',
    h2: 'text-2xl font-bold text-text',
    h3: 'text-xl font-semibold text-text',
    body: 'text-base text-subtext',
    caption: 'text-sm font-medium text-subtext',
    small: 'text-xs text-muted text-subtext',
    error: 'text-red-500 font-medium text-base',
  };

  return <Text {...props} className={cn(className, styles[variant])} />;
}
