import { OptionIcon } from "@/assets/icon/OptionIcon";
import '../Table/Table.scss'
import { Option } from "@/interfaces/interfaces";

interface props {
  items: Array<Option>;
  isOpen:boolean;
  onToggle:()=>void;
  handleAction:(handler: string)=>void;
}

export const MenuAction = ({ items,isOpen,onToggle,handleAction }: props) => {
  return (
    <div className="table__item--rel">
      <OptionIcon toggleMenu={onToggle} />
      {isOpen && 
        <ul className="menu-option">
          {
            items.map((option,index)=>(
              <li className="menu-option__item" key={index} onClick={()=>handleAction(option.handler)}>{option.title}</li>
            ))
          }
        </ul>}
    </div>
  );
};
