import { OptionIcon } from "@/assets/icon/OptionIcon";
import { useState } from "react";
import '../Table/Table.scss'

interface props {
  items: React.ReactNode[];
}

export const MenuAction = ({ items }: props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="table__item--rel">
      <OptionIcon toggleMenu={toggleMenu} />
      {isMenuOpen && <ul className="menu-option">{items}</ul>}
    </div>
  );
};
