import { ReactNode } from "react";

export default function InfoRow({ children }: { children: ReactNode }) {
  return <p className="flex items-center gap-x-1 text-base">{children}</p>;
}
