
interface DropdownMenuProps {
    items: React.ReactNode[];
    label: string;
    isOpen:boolean;
    onToggle:()=>void;
  }

export const MenuDes = ({items,label,isOpen,onToggle}:DropdownMenuProps) => {
  
  return (
    <div className="dropdown">
    <button className="dropbtn" onClick={onToggle}>
      {label}
    </button>
    {isOpen && <div className="dropdown-content">{items}</div>}
  </div>
  );
};
