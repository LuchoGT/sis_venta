import { FormPruebas } from '@/interfaces/interfaces';
import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd';
import { ButtonSearch } from '../../components/ButtonSearch/ButtonSearch';
import { Table } from '../../components/Table/Table';
import './TeacherList.scss';


interface props{
  data: FormPruebas[];
  toggleOpenView:()=>void,
  tooglePopUpView:()=>void,
  editItem: (index: number) => void;
  viewDetail: (index: number) => void;
  viewNameCourses: (index: number) => void;
  
}

export const TeacherList = ({viewNameCourses,editItem,toggleOpenView,data,viewDetail,tooglePopUpView}:props) => {

  return (
    <div className="teacher-list">
      <h1 className="teacher-list__title">Docentes</h1>
      <div className="teacher-list__buttons">
        <ButtonSearch />
        <ButtonAdd 
          toggleOpenView={toggleOpenView}
          title='Agregar docente'/>
      </div>
      <Table
        data={data}
        editItem={editItem}
        viewDetail={viewDetail}
        tooglePopUpView={tooglePopUpView}
        viewNameCourses={viewNameCourses}
      />
    </div>
  );
};
