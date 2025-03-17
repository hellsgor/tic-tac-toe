import { Game } from "@/lib/features/game";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      <h1 className="text-6xl font-bold">Tic Tac Toe</h1>
      <Game />
    </StoreProvider>
  );
}
