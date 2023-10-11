import { useTable } from "../../components/Table/useTable";
import { Probando } from "../../components/TeacherAddContent/Probando";
import { Form } from "../../sections/Form/Form";
import { TeacherList } from "../../sections/TeacherList/TeacherList";
import "./TeacherPage.scss";
import { useTeacher } from "./useTeacher";

export const TeacherPage = () => {
  const { openViewAdd, isView, closeViewAdd } = useTeacher();

  const { options, openCard, closeCard,showCard } = useTable();

  // const [isViewEdit, setIsViewEdit] = useState<boolean>(false);

  // const openEdit=()=>setIsViewEdit(true);
  // const closeEdit=()=>setIsViewEdit(false);

  // const [isViewDetail, setIsViewDetail] = useState<boolean>(false);

  // const openDetail=()=>setIsViewDetail(true);
  // const closeDetail=()=>setIsViewDetail(false);
  return (
    <>
      <div className="teacher">
        <TeacherList openViewAdd={openViewAdd} />
        {/* {options.map((option, index) => (
          <div key={index} className="queseso">
            {showCard[index] && (
              <Probando
                title={option.title}
                ct={option.ct}
                onClose={() => closeCard(index)}
              />
            )}
          </div>
        ))} */}
        <Form isView={isView} closeViewAdd={closeViewAdd} />
        {/* <TeacherAdd
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
          /> */}
      </div>
    </>
  );
};
