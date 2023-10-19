import { Form } from "../../sections/Form/Form";
import { PopUp } from "../../sections/PopupAdd/PopUp";
import { TeacherList } from "../../sections/TeacherList/TeacherList";
import { useTeacher } from "./useTeacher";
import "./TeacherPage.scss";
import { PopupAdd } from "../../sections/PopupAdd/PopupAdd";
import { Content } from "../../sections/PopupAdd/Content";

export const TeacherPage = () => {
  const {
    isPopUpView,
    tooglePopUpView,
    openView,
    toggleOpenView,
    viewingIndex,
    handleAdd,
    editItem,
    viewDetail,
    viewNameCourses,
    assignItem,
    closeForm,
    data,
    editingIndex,
    ClosePop
  } = useTeacher();

  



  return (
    <>
      <div className="teacher">
        {!openView ?(
          <TeacherList
            toggleOpenView={toggleOpenView}
            tooglePopUpView={tooglePopUpView}
            data={data}
            editItem={editItem}
            viewDetail={viewDetail}
            viewNameCourses={viewNameCourses}
          />
        ):(
          <Form
          onSubmit={handleAdd}
          onClose={closeForm}
          data={data}
          editingIndex={editingIndex}
          viewingIndex={viewingIndex}
          />
        )
        }
        {
          isPopUpView && 
          <PopupAdd
            tooglePopUp={tooglePopUpView}
            title="Asignación de curso"
            // onClose={ClosePop}  
            // viewingIndex={viewingIndex}
            // data={data}
            // assignItem={assignItem}
          >
             <Content
          onClose={ClosePop}
          data={data}
          viewingIndex={viewingIndex}
          onAssign={(index, cursos) => {
            assignItem(index, cursos); // Llama a la función para asignar el país
          }}/>
          </PopupAdd>
        }
      </div>
    </>
  );
};
