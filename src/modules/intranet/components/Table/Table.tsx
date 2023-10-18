import { FormPruebas } from "@/interfaces/interfaces";
import { useTable } from "./useTable";
import { MenuAction } from "../MenuAction/MenuAction";
import "./Table.scss";

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

  const handleAction = (handler: string, index: number) => {
    if (handler === "Detalle") {
      viewDetail(index);
    } else if (handler === "Editar") {
      editItem(index);
    } else if (handler === "Asignar") {
      tooglePopUpView();
      viewNameCourses(index);
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
        {data.map((item, index) => (
          <div key={index} className="table__item">
            <div>{index + 1}</div>
            <div>{item.nombres + " " + item.apellidos}</div>
            <div>01</div>
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};
