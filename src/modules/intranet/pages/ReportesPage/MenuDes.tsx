import { useState } from "react";

interface DropdownMenuProps {
    items: React.ReactNode[];
    label: string;
  }

export const MenuDes = ({items,label}:DropdownMenuProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="dropdown">
    <button className="dropbtn" onClick={toggleDropdown}>
      {label}
    </button>
    {isOpen && <div className="dropdown-content">{items}</div>}
  </div>
  );
};
