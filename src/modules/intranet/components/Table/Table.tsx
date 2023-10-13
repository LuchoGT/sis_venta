import "./Table.scss";
import { useTable } from "./useTable";
// import { MenuAction } from "../MenuAction/MenuAction";
import { FormData, FormPruebas } from "@/interfaces/interfaces";
import { useState } from "react";
import { OptionIcon } from "@/assets/icon/OptionIcon";

interface props {
  // dataList: FormData[];
  data: FormPruebas[];
  toggleOpen: () => void;
  toggleViewAsignarCurso: () => void;
  // editarTituloFormDocente:(title:string)=>void,
  editItem: (index: number) => void;
}
export const Table = ({
  editItem,
  data,
  toggleOpen,
  toggleViewAsignarCurso,
}: props) => {
  const { headers, options, openView } = useTable({
    toggleOpen,
    toggleViewAsignarCurso,
    editItem,
  });

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="table">
        <div className="table__headers">
          {headers.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
        </div>
        <div className="table__items">
          {data.map((item, index) => (
            <div key={index} className="table__item">
              <div>{index + 1}</div>
              <div>{item.nombres + " " + item.apellidos}</div>
              <div>{item.usuario}</div>
              <div>{item.correo}</div>
              {/* <MenuAction
                options={options} 
                openView={openView} /> */}
              {/* <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="table__item--rel"
              >
                <OptionIcon />
                {isMenuOpen && (
                  <ul className="menu-option">
                    {options.map((item, index) => (
                      <li
                        key={index}
                        className="menu-option__item"
                        onClick={()=>openView(index)}
                        // onClick={()=>openView(item.title?item.title: '')}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div> */}
              <div className="table__item--rel">
                <svg
                  onClick={() => toggleDropdown(index)}
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
                {activeIndex === index && (
                  <div className="menu-option">
                    <button className="menu-option__item" onClick={() => console.log("abriendo detalle")}>
                      Detalle
                    </button>
                    <button className="menu-option__item" onClick={() => editItem(index)}>Editar</button>
                  </div>
                )}
              </div>
              {/* <button onClick={()=>editItem(index)}>Editar</button> */}
            </div>
          ))}
        </div>
      </div>
      {/* {options.map((item, index) => (
        <div key={index} className="queseso">
          {showView[index] && (
            <Form2
              sub={item.sub}
              onClose={() => closeView(index)}
            />
          )}
        </div>
      ))} */}
    </>
  );
};
