import { TeacherAdd } from "../../sections/TeacherAdd/TeacherAdd";
import { TeacherList } from "../../sections/TeacherList/TeacherList";
import "./TeacherPage.scss";
import { useTeacher } from "./useTeacher";


export const TeacherPage = () => {
  const { isView,openView,closeView } = useTeacher();
  return (
    <>
      <div className="teacher">
        <TeacherList openView={openView}/>
        <TeacherAdd
          isView={isView}
          closeView={closeView}
          title="Agregar"
          />
      </div>
    </>
  );
};
