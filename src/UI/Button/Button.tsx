import clsx from "clsx";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = ({
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    " rounded-lg border px-5 py-3 font-mono transition-colors",
    disabled
      ? "bg-transparent border-gray-600 text-gray-600 cursor-not-allowed opacity-70"
      : "bg-dark-bg cursor-pointer border-transparent hover:border-hover",
    className,
  );

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export const MemoizedButton = memo(Button);
