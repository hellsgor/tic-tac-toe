"use client";

import { useGameChecker } from "../../lib/features/game/hooks/useGameChecker";
import Field from "../../lib/features/game/components/Field/Field";
import Info from "../../lib/features/game/components/Info/Info";
import { Container } from "@/UI/Container";

export default function Game() {
  const { win, draw } = useGameChecker();

  return (
    <Container>
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <Info win={win} draw={draw} />
        <Field win={win} />
      </div>
    </Container>
  );
}
