import { FormPruebas } from "@/interfaces/interfaces";
import { useTable } from "./useTable";
import { MenuAction } from "../MenuAction/MenuAction";
import "./Table.scss";
import { useState } from "react";
import { LeftIcon } from "@/assets/icon/LeftIcon";
import { RightIcon } from "@/assets/icon/RightIcon";

interface props {
  data: FormPruebas[];
  editItem: (index: number) => void;
  viewDetail: (index: number) => void;
  viewNameCourses: (index: number) => void;
  tooglePopUpView: () => void;

}
export const Table = ({
  editItem,
  data,
  viewDetail,
  tooglePopUpView,
  viewNameCourses,
}: props) => {
  const { headers, options } = useTable();

  const itemsPerPage=7;

  const handleAction = (handler: string, index: number) => {
    if (handler === "Detalle") {
      viewDetail(index);
    } else if (handler === "Editar") {
      editItem(index);
    } else if (handler === "Asignar") {
      tooglePopUpView();
      viewNameCourses(index);
      setOpenIndex(null)
    }
  };

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const visibleData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="table">
      <div className="table__headers">
        {headers.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
      <div className="table__items">
        {visibleData.map((item, index) => (
          <div key={index} className="table__item">
            <div>{index + 1}</div>
            <div>{item.nombres + " " + item.apellidos}</div>
            <div>0{item.cursos?.length}</div>
            <div>Habilitado</div>
            <MenuAction
              items={options.map((option) => (
                <li
                  key={option.title}
                  onClick={() => handleAction(option.handler, index)}
                  className="menu-option__item"
                >
                  {option.title}
                </li>
              ))}
              isOpen={openIndex === index}
              onToggle={() => toggleDropdown(index)}
            />
          </div>
        ))}
      </div>
      <div className="table__footer">
        <button onClick={handlePrevPage} disabled={page === 1} className="table__button">
          <LeftIcon/>
        </button>
        <button onClick={handleNextPage} disabled={page === totalPages} className="table__button">
          <RightIcon/>
        </button>
      </div>
    </div>
  );
};
