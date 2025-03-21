import { ReactNode } from "react";

export function Avatar({ children }: { children: ReactNode }) {
  return (
    <div className="aspect-square w-8 overflow-hidden rounded-full bg-transparent text-white">
      {children}
    </div>
  );
}
