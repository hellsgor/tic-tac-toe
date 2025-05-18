import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Container } from "../../UI/Container";
import { Logo } from "../../UI/Logo";
import { MemoizedPlayer } from "../Player/";
import { basePath } from "@/constants/basePath";

export function Header() {
  console.log(basePath);
  return (
    <header className="bg-asphalt fixed top-0 right-0 left-0 drop-shadow-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <button className="flex cursor-pointer items-center gap-x-3 text-left transition-colors hover:text-(--color-hover)">
            <MemoizedPlayer
              imgSrc={`${basePath}/images/userExample1.webp`}
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
