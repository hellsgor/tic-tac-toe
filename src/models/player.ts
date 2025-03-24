import { ReactNode } from "react";

export interface PlayerProps {
  imgSrc?: string;
  className?: string;
  userName: string;
  rate: number;
}

export interface InfoPlayerProps extends PlayerProps {
  icon: ReactNode;
}
