import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-bold transition-colors hover:text-(--color-hover)"
    >
      Tic Tac Toe
    </Link>
  );
}
