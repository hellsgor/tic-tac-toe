"use client";

import { useGameChecker } from "../../hooks/useGameChecker";
import Field from "../Field/Field";
import Info from "../Info/Info";

export function Game() {
  useGameChecker();

  return (
    <div className="relative">
      <Field />
      <Info classes="absolute top-0 left-full pl-10 h-full" />
    </div>
  );
}
