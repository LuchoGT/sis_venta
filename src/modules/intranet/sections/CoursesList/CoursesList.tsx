import { PopupTemplate } from "../../template/PopupTemplate/PopupTemplate";
import { CoursesAdd } from "../../components/CoursesAdd/CoursesAdd";
import "./CoursesList.scss";
import { usePopup } from "../../hooks/usePopup";
import { Table } from "../../components/Table/Table";
import { useCoursesList } from "./useCoursesList";

export const CoursesList = () => {
  const { isOpenPopUp, tooglePopUp } = usePopup();

  const {header,data,handleAdd} = useCoursesList();

  return (
    <>
      <div className="coursesList">
        <div className="coursesList__container">
          <div onClick={tooglePopUp} className="coursesList__button">Agregar</div>
        </div>
      </div>
      <Table header={header} data={data}/>
      {isOpenPopUp && (
        <PopupTemplate tooglePopUp={tooglePopUp} title="Agregar curso">
          <CoursesAdd 
            tooglePopUp={tooglePopUp}
            onFormSubmit={handleAdd}
            />
        </PopupTemplate>
      )}
    </>
  );
};
