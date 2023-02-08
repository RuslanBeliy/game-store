import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import s from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: 'primary' | 'secondary';
  size?: 's' | 'm';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  size = 'm',
  variant = 'primary',
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!onClick) return;
    e.preventDefault();
    onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(s.button, s[size], s[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
