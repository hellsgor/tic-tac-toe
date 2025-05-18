import clsx from "clsx";
import { FC } from "react";

type InputTextLabelProps = {
  id: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
};

export const InputTextLabel: FC<InputTextLabelProps> = ({
  id,
  label,
  required,
  disabled,
}) => (
  <label
    htmlFor={id}
    className={clsx(
      "mb-1 block w-[fit-content] text-xs font-medium text-gray-500",
      required &&
        `after:text-hover relative after:absolute after:top-[-4px] after:left-[100%] after:ml-0.5 after:content-['*']`,
      disabled && "line-through",
    )}
  >
    {label}
  </label>
);
