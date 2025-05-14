import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  helpText?: string;
  errorText?: string;
}

export const InputText: FC<InputTextProps> = ({
  className,
  label,
  type = "text",
  id,
  required,
  helpText,
  errorText,
  ...inputProps
}) => {
  return (
    <div
      className={clsx("relative", (helpText || errorText) && "pb-5", className)}
    >
      {label && id && (
        <label
          htmlFor={id}
          className={clsx(
            "mb-1 block w-[fit-content] text-xs font-medium text-gray-500",
            required &&
              `after:text-hover relative after:absolute after:top-[-4px] after:left-[100%] after:ml-0.5 after:content-['*']`,
          )}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        required={required}
        {...inputProps}
        className={clsx(
          "bg-dark-bg hover:border-hover focus:border-hover block w-full rounded-lg border border-transparent px-5 py-3 font-mono text-sm outline-0 transition-colors disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
        )}
      />
      {(helpText || errorText) && (
        <p
          className={clsx(
            "mt-1 text-xs",
            "absolute bottom-0 left-0",
            errorText ? "text-red-500" : "text-gray-500",
          )}
        >
          {errorText || helpText}
        </p>
      )}
    </div>
  );
};
