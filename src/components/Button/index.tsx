import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  expandBoxWidth?: boolean;
}

export function Button({ children, expandBoxWidth, ...rest }: ButtonProps): JSX.Element {
  return (
    <button
      {...rest}
      className={`btn btn-primary ${rest.className} ${styles.button} ${expandBoxWidth && styles.expand}`}
    >
      {children}
    </button>
  )
}
