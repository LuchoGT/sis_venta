import { PopupTemplate } from "../../template/PopupTemplate/PopupTemplate";
import { CoursesAdd } from "../../components/CoursesAdd/CoursesAdd";
import "./CoursesList.scss";
import { usePopup } from "../../hooks/usePopup";

export const CoursesList = () => {
  const { isOpenPopUp, tooglePopUp } = usePopup();

  return (
    <>
      <div className="coursesList">
        <div className="coursesList__container">
          <div onClick={tooglePopUp} className="coursesList__button">Agregar</div>
        </div>
      </div>
      {isOpenPopUp && (
        <PopupTemplate tooglePopUp={tooglePopUp} title="Agregar curso">
          <CoursesAdd tooglePopUp={tooglePopUp} />
        </PopupTemplate>
      )}
    </>
  );
};
