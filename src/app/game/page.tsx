"use client";

import { Field, Info, useGameChecker } from "@/lib/features/game";
import { Container } from "@/UI/Container";

export default function Game() {
  return (
    <Container>
      <div className="flex w-full flex-col items-center justify-center gap-10">
        {/* <Info /> */}
        <Field />
      </div>
    </Container>
  );
}
