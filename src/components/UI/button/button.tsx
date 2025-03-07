import { ButtonHTMLAttributes, ReactNode } from 'react';
import classes from './button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classNames?: string;
}

export const Button = ({ classNames, children, ...props }: ButtonProps) => {
  return (
    <button
      className={[classes.button, classNames].join(' ').trim()}
      {...props}
    >
      {children}
    </button>
  );
};
