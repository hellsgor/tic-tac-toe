import StoreProvider from "./StoreProvider";
import { Field } from "@/components/Field/Field";

export default function Home() {
  return (
    <StoreProvider>
      <h1 className="text-6xl font-bold">Tic Tac Toe</h1>
      <Field />
    </StoreProvider>
  );
}
