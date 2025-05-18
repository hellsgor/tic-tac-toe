import { Field, Info } from "@/lib/features/game";
import { Container } from "@/UI/Container";

export default function Home() {
  return (
    <Container className="items-center justify-center gap-10">
      <Info />
      <Field />
    </Container>
  );
}
