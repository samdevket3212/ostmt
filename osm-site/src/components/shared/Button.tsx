import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { AppLink } from '@/lib/platform';
import { Icon, type IconName } from './Icon';

type Props = {
  variant?: 'primary' | 'secondary' | 'link';
  icon?: IconName | 'none';
  size?: 'md' | 'lg';
  href?: string;
  className?: string;
  magnetic?: boolean;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function Button({ variant = 'primary', icon, size = 'md', href, className, magnetic, children, type = 'button', ...rest }: Props) {
  const ic = icon ?? (variant === 'primary' ? 'arrow-up-right' : 'arrow');
  const cls = ['gg-btn', `gg-btn--${variant}`, size === 'lg' && 'gg-btn--lg', className].filter(Boolean).join(' ');
  const mag = magnetic ? { 'data-magnetic': '' } : {};
  const inner = (
    <>
      <span className="gg-btn__label">{children}</span>
      {ic !== 'none' && (
        <span className={`gg-btn__icon gg-btn__icon--${ic}`}>
          <Icon name={ic} size={18} />
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <AppLink href={href} className={cls} {...mag}>
        {inner}
      </AppLink>
    );
  }
  return (
    <button type={type} className={cls} {...mag} {...rest}>
      {inner}
    </button>
  );
}
