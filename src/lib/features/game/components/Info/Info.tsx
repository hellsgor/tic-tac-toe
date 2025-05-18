"use client";

import XIcon from "@/UI/icons/XIcon";
import OIcon from "@/UI/icons/OIcon";
import { InfoPlayer } from "./InfoPlayer";
import { InfoActions } from "./InfoActions";
import { InfoMove } from "./InfoMove";
import { Panel } from "@/UI/Panel";
import { basePath } from "@/constants/basePath";

const players = [
  {
    userName: "Henry",
    rate: 1234,
    imgSrc: `${basePath}/images/userExample1.webp`,
    icon: <XIcon />,
  },
  {
    userName: "Sophie",
    rate: 1234,
    imgSrc: `${basePath}/images/userExample2.webp`,
    icon: <OIcon />,
  },
];

export default function Info() {
  return (
    <div className="flex flex-col justify-between gap-y-5">
      <Panel justify={"center"}>
        <InfoPlayer {...players[0]} />
        <InfoMove />
        <InfoPlayer {...players[1]} />
      </Panel>
      <InfoActions />
    </div>
  );
}
