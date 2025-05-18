import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";
import {
  InputTextField,
  InputTextLabel,
  InputTextMessage,
} from "./InputTextPartials";

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
  disabled,
  onFocus,
  ...inputProps
}) => {
  const containerClass = clsx("relative pb-5", className);

  return (
    <div className={containerClass}>
      {label && id && (
        <InputTextLabel
          id={id}
          label={label}
          required={required}
          disabled={disabled}
        />
      )}
      <InputTextField
        type={type}
        isError={!!errorText}
        id={id}
        required={required}
        disabled={disabled}
        onFocus={onFocus}
        {...inputProps}
      />
      <InputTextMessage helpText={helpText} errorText={errorText} />
    </div>
  );
};
