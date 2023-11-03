import { Options } from "./interfaces";

interface props {
    isOpen:boolean;
    onToggle:()=>void;
    items: Array<Options>;
    onOptionClick: (handler: string) => void; 
  }
  

export const Menu = ({isOpen,onToggle,items,onOptionClick}:props) => {

    const handleOptionClick = (handler: string) => {
        onOptionClick(handler); // Ejecuta la función con el handler
        onToggle(); // Cierra el menú
      };
  return (
    <div className="table__item--rel">
      <svg
        onClick={onToggle}
        xmlns="http://www.w3.org/2000/svg"
        className="option-icon icon icon-tabler icon-tabler-dots-vertical"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      </svg>
      {isOpen && (
        <ul className="menu-option">
          {items.map((option, index) => (
            <li
              className="menu-option__item"
              key={index}
              onClick={() => handleOptionClick(option.handler)}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
