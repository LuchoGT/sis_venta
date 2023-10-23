import { OptionIcon } from "@/assets/icon/OptionIcon";
import '../Table/Table.scss'

interface props {
  items: React.ReactNode[];
  isOpen:boolean;
  onToggle:()=>void;
}

export const MenuAction = ({ items,isOpen,onToggle }: props) => {
  return (
    <div className="table__item--rel">
      <OptionIcon toggleMenu={onToggle} />
      {isOpen && <ul className="menu-option">{items}</ul>}
    </div>
  );
};
