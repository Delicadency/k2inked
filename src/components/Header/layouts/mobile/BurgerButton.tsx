import { IconBurger } from "@/icons/IconBurger";

type Props = {
    onClose: () => void
}

export const BurgerButton = ({onClose} : Props) => (
  <button type="button" 
  onClick={onClose}
  aria-label="Zamknij menu">
    <IconBurger className="w-5.5 transition duration-300 active:scale-110" />
  </button>
);
