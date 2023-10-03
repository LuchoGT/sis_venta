import { Table } from "@/modules/common/Table/Table";
import "./TeacherPage.scss";
import { useTeacher } from "./useTeacher";
import { TeacherAdd } from "../../components/organisms/TeacherAdd/TeacherAdd";
export const TeacherPage = () => {
  const { openTeacherAdd, isTeacherAdd, closeTeacherAdd } = useTeacher();
  return (
    <>
      <div className="teacher">
        <h1 className="teacher__title">Docentes</h1>
        <div className="teacher__sub">
          <div className="teacher__search">
            <input
              type="text"
              placeholder="Buscar"
              className="teacher__input"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="navbar__img icon icon-tabler icon-tabler-search"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </div>
          <div className="teacher__add" onClick={openTeacherAdd}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M16 19h6"></path>
              <path d="M19 16v6"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            </svg>
            <span>Agregar Docente</span>
          </div>
        </div>
        <Table />
        <TeacherAdd
          isTeacherAdd={isTeacherAdd}
          closeTeacherAdd={closeTeacherAdd}
        />
      </div>
    </>
  );
};
