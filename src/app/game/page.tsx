"use client";

import { Field, Info, useGameChecker } from "@/lib/features/game";
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
