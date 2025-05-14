import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

type InputTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  isError?: boolean;
};

export const InputTextField: FC<InputTextFieldProps> = ({
  type = "text",
  isError = false,
  className,
  ...props
}) => (
  <input
    type={type}
    className={clsx(
      "bg-dark-bg hover:border-hover focus:border-hover block w-full rounded-lg border px-5 py-3 font-mono text-sm outline-0 transition-colors placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-transparent",
      !isError && "border-transparent",
      isError && "border-red-500 hover:border-red-500",
      className,
    )}
    {...props}
  />
);
