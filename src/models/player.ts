import { ReactNode } from "react";

export interface PlayerProps {
  imgSrc?: string;
  className?: string;
  userName: string;
  rate: number;
}

export interface PlayerPropsWithIcon extends PlayerProps {
  icon: ReactNode;
}
