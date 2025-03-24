import clsx from "clsx";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-dark-bg hover:border-hover cursor-pointer rounded-lg border border-transparent px-5 py-3 font-mono transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const MemoizedButton = memo(Button);
