import { Container } from "../../UI/Container";
import { Logo } from "../../UI/Logo";
import { MemoizedPlayer } from "../Player/";

export function Header() {
  return (
    <header className="bg-asphalt absolute top-0 right-0 left-0 py-4 drop-shadow-xl">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <MemoizedPlayer
            imgSrc={"/images/user.webp"}
            userName={"Username"}
            rate={1234}
          />
        </div>
      </Container>
    </header>
  );
}
