import { Container } from "@/components/Container";
import { Logo } from "../../components/Logo";

export const HeaderTabAndDesk = () => {
  return (
    <div className="text-light bg-darker inset-x-0 top-0 z-50 hidden md:flex">
      <Container>
        <Logo className="w-27.5" />
      </Container>
    </div>
  );
};
