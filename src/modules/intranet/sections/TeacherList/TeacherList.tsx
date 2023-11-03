import { FormPruebas, ItemsTable } from '@/interfaces/interfaces';
import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd';
import { ButtonSearch } from '../../components/ButtonSearch/ButtonSearch';
import { Table } from '../../components/Table/Table';
import './TeacherList.scss';
import { useState,ChangeEvent } from 'react';
import { useTeacherList } from './useTeacherList';


interface props{
  data: ItemsTable;
  toggleOpenView:()=>void,
  tooglePopUpView:()=>void,
  editItem: (index: number) => void;
  viewDetail: (index: number) => void;
  viewNameCourses: (index: number) => void;
  header:Array<string>
}

export const TeacherList = ({header,viewNameCourses,editItem,toggleOpenView,data,viewDetail,tooglePopUpView}:props) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FormPruebas[]>([]);

  const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Realiza la búsqueda en los datos
    const results = data.filter(item =>
      item.nombres.toLowerCase().includes(query.toLowerCase()) ||
      item.apellidos.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const fieldsToShow = ["nombres","apellidos"];

  return (
    <div className="teacher-list">
      <h1 className="teacher-list__title">Docentes</h1>
      <div className="teacher-list__buttons">
        <ButtonSearch
          searchQuery={searchQuery} 
          handleSearch={handleSearch}
        />
        <ButtonAdd 
          toggleOpenView={toggleOpenView}
          title='Agregar docente'/>
      </div>
      <Table
        // data={searchQuery ? searchResults : data}
        data={data}
        editItem={editItem}
        viewDetail={viewDetail}
        tooglePopUpView={tooglePopUpView}
        viewNameCourses={viewNameCourses}
        header={header}
        fields={fieldsToShow} 
      />
    </div>
  );
};
