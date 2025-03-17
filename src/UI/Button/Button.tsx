import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
  children: ReactNode;
}

export const Button = ({ children, classes, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-dark-bg hover:border-hover cursor-pointer rounded-lg border border-transparent px-5 py-3 font-mono transition-colors ${classes ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
