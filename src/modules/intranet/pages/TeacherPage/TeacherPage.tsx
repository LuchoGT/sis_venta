import { TeacherAdd } from "../../sections/TeacherAdd/TeacherAdd";
import { TeacherList } from "../../sections/TeacherList/TeacherList";
import "./TeacherPage.scss";
import { useTeacher } from "./useTeacher";
import { useState } from "react";

export const TeacherPage = () => {
  const { isView,openViewAdd,closeViewAdd } = useTeacher();

  const [isViewEdit, setIsViewEdit] = useState<boolean>(false);

  const openEdit=()=>setIsViewEdit(true);
  const closeEdit=()=>setIsViewEdit(false);


  const [isViewDetail, setIsViewDetail] = useState<boolean>(false);

  const openDetail=()=>setIsViewDetail(true);
  const closeDetail=()=>setIsViewDetail(false);
  return (
    <>
      <div className="teacher">
        <TeacherList 
          openViewAdd={openViewAdd}
          openEdit={openEdit}
          openDetail={openDetail}/>
        <TeacherAdd
          isView={isView}
          closeViewAdd={closeViewAdd}
          value="Agregar"
          />
        <TeacherAdd
          isViewEdit={isViewEdit}
          closeEdit={closeEdit}
          value="Editar"
          />
        <TeacherAdd
          isViewDetail={isViewDetail}
          closeDetail={closeDetail}
          value="Detalle"
          />
      </div>
    </>
  );
};
