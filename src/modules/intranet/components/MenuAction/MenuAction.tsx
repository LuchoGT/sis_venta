import { OptionIcon } from "@/assets/icon/OptionIcon";
import { useState } from "react";

interface props{
    options:[],
    openCard:()=>void,
}
export const MenuAction = ({options,openCard}:props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="table__item--rel"
    >
      <OptionIcon />
      <ul className={`${isMenuOpen ? "menu-option" : "menu-option--hidden"}`}>
        {options.map((item, index) => (
          <li
            key={index}
            className="menu-option__item"
            onClick={()=>openCard(index)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
