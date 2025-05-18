import clsx from "clsx";
import { FC, Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  Transition,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

export interface UiSelectOption {
  value: string;
  label: string;
}

interface UiSelectProps {
  options: UiSelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
}

export const Select: FC<UiSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "",
  className,
  disabled = false,
  error = false,
}) => {
  const selected = options.find((opt) => opt.value === value) || null;

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className={clsx("relative", className)}>
        <ListboxButton
          className={clsx(
            "bg-dark-bg hover:border-hover focus:border-hover relative w-full cursor-pointer rounded-lg border px-5 py-3 text-left font-mono text-sm transition-colors outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50",
            !error && "border-transparent",
            error && "border-red-500 hover:border-red-500",
          )}
        >
          <span className={clsx(selected ? "text-white" : "text-gray-500")}>
            {selected?.label ?? placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <ListboxOptions className="bg-dark-bg absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-sm shadow-lg focus:outline-none">
            {options.map((opt) => (
              <ListboxOption
                key={opt.value}
                className={clsx(
                  "relative cursor-pointer py-2 pr-4 pl-10 select-none",
                )}
                value={opt.value}
              >
                {({ selected: sel }) => (
                  <>
                    <span
                      className={clsx(
                        sel
                          ? "font-medium text-white"
                          : "font-normal text-gray-500",
                        "hover:text-hover block truncate",
                      )}
                    >
                      {opt.label}
                    </span>
                    {sel && (
                      <span className="text-hover absolute inset-y-0 left-0 flex items-center pl-3">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
};
