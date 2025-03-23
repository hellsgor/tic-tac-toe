export interface PlayerProps {
  imgSrc?: string;
  userName: string;
  rate: number;
}

export interface PlayerPropsWithIcon extends PlayerProps {
  icon: string;
}
