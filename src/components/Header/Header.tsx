import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Container } from "../../UI/Container";
import { Logo } from "../../UI/Logo";
import { MemoizedPlayer } from "../Player/";

export function Header() {
  return (
    <header className="bg-asphalt absolute top-0 right-0 left-0 py-4 drop-shadow-xl">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <button className="flex cursor-pointer items-center gap-x-3 text-left transition-colors hover:text-(--color-hover)">
            <MemoizedPlayer
              imgSrc={"/images/user.webp"}
              userName={"Username"}
              rate={1234}
            />
            <ChevronDownIcon className="size-4" />
          </button>
        </div>
      </Container>
    </header>
  );
}
