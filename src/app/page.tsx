import { Game } from "@/lib/features/game";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold">Tic Tac Toe</h1>
      <Game />
    </>
  );
}
