import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd';
import { ButtonSearch } from '../../components/ButtonSearch/ButtonSearch';
import { Table } from '../../components/Table/Table';
import './TeacherList.scss';


interface props{
  openViewAdd:()=>void,
}

export const TeacherList = ({openViewAdd}:props) => {
  return (
    <div className="teacher-list">
      <h1 className="teacher-list__title">Docentes</h1>
      <div className="teacher-list__buttons">
        <ButtonSearch />
        <ButtonAdd 
          openView={openViewAdd}
          title='Agregar docente'/>
      </div>
      <Table 
      />
    </div>
  );
};
