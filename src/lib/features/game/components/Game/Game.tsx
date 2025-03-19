"use client";

import { useGameChecker } from "../../hooks/useGameChecker";
import Field from "../Field/Field";
import Info from "../Info/Info";

export function Game() {
  const { win, draw } = useGameChecker();

  return (
    <div className="relative">
      <Field win={win} />
      <Info
        win={win}
        draw={draw}
        classes="absolute top-0 left-full pl-10 h-full flex flex-col justify-between gap-y-5"
      />
    </div>
  );
}
