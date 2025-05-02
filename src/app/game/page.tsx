"use client";

import { Field, Info } from "@/lib/features/game";
import { Container } from "@/UI/Container";

export default function Game() {
  return (
    <Container centered={true} gap={10}>
      <Info />
      <Field />
    </Container>
  );
}
