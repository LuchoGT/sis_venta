import "./Table.scss";
import { OptionIcon } from "@/assets/icon/OptionIcon";
import { useState } from "react";
import { useTable } from "./useTable";


export const Table = () => {
  const { header, teachers, teacherOption} = useTable();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="table">
      <div className="table__headers">
        {header.map((item, index) => (
          <div key={index}>{item.text}</div>
        ))}
      </div>
      <div className="table__items">
        {teachers.map((item, index) => (
          <div key={index} className="table__item">
            <div>{index + 1}</div>
            <div>{item.nombre + " " + item.apellido}</div>
            <div></div>
            <div>{item.estado}</div>
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="table__item--rel"
            >
              <OptionIcon />
              <ul
                className={`${
                  isMenuOpen ? "menu-option" : "menu-option--hidden"
                }`}
              >
                {teacherOption.map((item, index) => (
                  <li key={index} className="menu-option__item" onClick={item.funcion}>
                    {item.name} 
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
