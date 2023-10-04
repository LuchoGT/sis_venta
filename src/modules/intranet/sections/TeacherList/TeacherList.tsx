import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd';
import { ButtonSearch } from '../../components/ButtonSearch/ButtonSearch';
import { Table } from '../../components/Table/Table';
import './TeacherList.scss';


interface props{
  openView:()=>void
}

export const TeacherList = ({openView}:props) => {
  return (
    <div className="teacher-list">
      <h1 className="teacher-list__title">Docentes</h1>
      <div className="teacher-list__buttons">
        <ButtonSearch />
        <ButtonAdd openView={openView}/>
      </div>
      <Table/>
    </div>
  );
};
