import clsx from "clsx";
import { FC } from "react";

type InputTextMessageProps = {
  helpText?: string;
  errorText?: string;
};

export const InputTextMessage: FC<InputTextMessageProps> = ({
  helpText,
  errorText,
}) => {
  const message = errorText ?? helpText;
  if (!message) return null;

  return (
    <p
      className={clsx(
        "absolute bottom-0 left-0 mt-1 text-xs",
        errorText ? "text-red-500" : "text-gray-500",
      )}
    >
      {message}
    </p>
  );
};
