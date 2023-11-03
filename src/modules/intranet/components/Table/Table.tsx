import { FormPruebas, ItemsTable } from "@/interfaces/interfaces";
import { useTable } from "./useTable";
import { MenuAction } from "../MenuAction/MenuAction";
import "./Table.scss";
import { useState } from "react";
import { LeftIcon } from "@/assets/icon/LeftIcon";
import { RightIcon } from "@/assets/icon/RightIcon";

interface props {
  data: ItemsTable;
  editItem: (index: number) => void;
  viewDetail: (index: number) => void;
  viewNameCourses: (index: number) => void;
  tooglePopUpView: () => void;
  header:Array<string>;
  fields:string[]
}
export const Table = ({
  editItem,
  data,
  viewDetail,
  tooglePopUpView,
  viewNameCourses,
  header,
  fields
}: props) => {
  // const { headers, options } = useTable({header:header});

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

  // const [page, setPage] = useState(1);
  // const totalPages = Math.ceil(data.length / itemsPerPage);
  // const startIndex = (page - 1) * itemsPerPage;
  // const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  // const visibleData = data.slice(startIndex, endIndex);

  // const handlePrevPage = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (page < totalPages) {
  //     setPage(page + 1);
  //   }
  // };

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
      <ul className="table__headers">
        {header.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
     <div className="table__items">
        {
          data.items.map((item,index)=>(
            <li key={index} className="table__item">
              {
                fields && fields.map((field,index)=>(
                  <div key={index}>
                    {item[field]}
                  </div>
                ))
              }
              <div>00</div>
              <div>Habilitado</div>
                <MenuAction
                  handleAction={(handler)=>handleAction(handler,index)}
                  items={data.button}
                  isOpen={openIndex === index}
                  onToggle={() => toggleDropdown(index)}
                />
            </li>
          ))
        }
        </div>
    </div>
  );
};
