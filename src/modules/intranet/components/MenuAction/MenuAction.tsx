import { OptionIcon } from "@/assets/icon/OptionIcon";
import { Option } from "@/interfaces/interfaces";
import { useState } from "react";
import { Form2 } from "../../sections/Form/Form2";
import { useTable } from "../Table/useTable";

interface props {
  options: Option[];
  openView: (index:number) => void;
}

export const MenuAction = ({ options, openView }: props) => {

  const { closeView,showView} = useTable();


  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="table__item--rel">
      <OptionIcon />
      {
        isMenuOpen && 
        <ul className="menu-option">
          {options.map((item, index) => (
            <li
              key={index}
              className="menu-option__item"
              onClick={() => openView(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
