"use client";

import { useGameChecker } from "../../hooks/useGameChecker";
import Field from "../Field/Field";
import Info from "../Info/Info";

export function Game() {
  const gameCheck = useGameChecker();

  return (
    <div className="relative">
      <Field win={gameCheck.win} />
      <Info
        gameCheck={gameCheck}
        classes="absolute top-0 left-full pl-10 h-full"
      />
    </div>
  );
}
