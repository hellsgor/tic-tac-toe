import clsx from "clsx";
import { Panel } from "../Panel";
import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button/Button";

interface ModalProps {
  width: "md" | "full";
  isVisible: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export function Modal({
  width,
  isVisible = false,
  onClose,
  children,
}: ModalProps) {
  if (!isVisible) return;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900/50 backdrop-blur-xs">
      <div
        className={clsx(
          "relative",
          {
            md: "w-full max-w-[360px]",
            full: "mx-5",
          }[width],
        )}
      >
        <Panel>{children}</Panel>
        {onClose && (
          <Button
            className="absolute top-0 left-[calc(100%+12px)] flex items-center justify-center !p-1"
            onClick={onClose}
          >
            <XMarkIcon className="size-6" />
          </Button>
        )}
      </div>
    </div>
  );
}
