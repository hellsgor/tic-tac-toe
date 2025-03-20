import { Container } from "../Container";
import { Logo } from "../Logo";
import { Player } from "../Player";

export function Header() {
  return (
    <header className="bg-asphalt absolute top-0 right-0 left-0 py-4 drop-shadow-xl">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Player />
        </div>
      </Container>
    </header>
  );
}
