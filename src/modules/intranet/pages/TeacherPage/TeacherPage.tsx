import { Form } from "../../sections/Form/Form";
import { TeacherList } from "../../sections/TeacherList/TeacherList";
import { useTeacher } from "./useTeacher";
import { PopupTemplate } from "../../template/PopupTemplate/PopupTemplate";
import { TeacherCourseAdd } from "../../components/TeacherCourseAdd/TeacherCourseAdd";
import "./TeacherPage.scss";

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
    ClosePop,
    header,
    items
  } = useTeacher();



  return (
    <>
      <div className="teacher">
        {!openView ? (
          <TeacherList
            toggleOpenView={toggleOpenView}
            tooglePopUpView={tooglePopUpView}
            data={data}
            editItem={editItem}
            viewDetail={viewDetail}
            viewNameCourses={viewNameCourses}
            header={header}
          />
        ) : (
          <Form
            onSubmit={handleAdd}
            onClose={closeForm}
            data={data.items}
            editingIndex={editingIndex}
            viewingIndex={viewingIndex}
            // Mostrar resultados de búsqueda si searchQuery no está vacío
          />
        )}
        {isPopUpView && (
          <PopupTemplate tooglePopUp={tooglePopUpView} title="Asignación de curso">
            <TeacherCourseAdd
              onClose={ClosePop}
              data={data.items}
              viewingIndex={viewingIndex}
              onAssign={(index, cursos) => {
                assignItem(index, cursos); // Llama a la función para asignar el país
              }}
            />
          </PopupTemplate>
        )}
      </div>
    </>
  );
};
