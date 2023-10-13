import { FormPruebas } from '@/interfaces/interfaces';
import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd';
import { ButtonSearch } from '../../components/ButtonSearch/ButtonSearch';
import { Table } from '../../components/Table/Table';
import { useProbando } from '../../components/TeacherAddContent/useProbando';
import './TeacherList.scss';
import {  useEffect } from "react";


interface props{
  toggleOpen:()=>void,
  // editarTituloFormDocente:(title:string)=>void,
  toggleViewAsignarCurso:()=>void,
  data: FormPruebas[];
  editItem: (index: number) => void;

}

export const TeacherList = ({editItem,toggleOpen,toggleViewAsignarCurso,data}:props) => {

  return (
    <div className="teacher-list">
      <h1 className="teacher-list__title">Docentes</h1>
      <div className="teacher-list__buttons">
        <ButtonSearch />
        <ButtonAdd 
          toggleOpen={toggleOpen}
          title='Agregar docente'/>
      </div>
      <Table
        // dataList={dataList}
        data={data}
        // editarTituloFormDocente={editarTituloFormDocente}
        toggleOpen={toggleOpen}
        toggleViewAsignarCurso={toggleViewAsignarCurso}
        editItem={editItem}
      />
    </div>
  );
};
